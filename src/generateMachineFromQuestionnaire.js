import { assign, createMachine } from 'xstate'

// Utility function to automatically update the context after the execution of each task
const updateContext = assign((context, event) => ({
  ...context,
  ...event?.data
}))

const generateMachineFromQuestionnaire = (questionnaire) => {
  // Base machine
  const machine = {
    id: 'questionnaire-machine',
    context: {},
    states: {}
  }

  // Add a machine state for each task in the questionnaire
  const tasks = questionnaire?.tasks?.properties

  if (tasks) {
    const tasksKeys = Object.keys(tasks)

    tasksKeys.forEach((key, index) => {
      const taskState = {
        id: key,
        entry: 'updateContext'
      }

      if (index < tasksKeys.length - 1) {
        // If not the last task - transition to next task once completed
        taskState.on = {
          COMPLETED: {
            target: tasksKeys[index + 1]
          }
        }
      } else {
        // If last task - mark as a final state
        taskState.type = 'final'
      }

      machine.states[key] = taskState

      // If task has a machine override, use it
      if (tasks[key].on) {
        machine.states[key].on = tasks[key].on
      }
    })

    // Set first task as the initial state
    if (tasksKeys.length > 0) {
      machine.initial = tasksKeys[0]
    }
  }

  // Generate any condition guards
  const guards = {};
  if (questionnaire?.tasks?.cond) {
    Object.keys(questionnaire.tasks.cond).forEach(key => {
      // Condition strings come from a trusted source, so they are safe to parse
      // eslint-disable-next-line no-new-func
      guards[key] = new Function('context', 'event', 'return ' + questionnaire.tasks.cond[key]);
    });
  }

  return createMachine(machine, { actions: { updateContext }, guards })
}

export default generateMachineFromQuestionnaire

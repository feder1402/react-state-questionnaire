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

      // Apply any machine vveride if provided
      const task = tasks[key]

      // If task has a machine override, use it
      if (task.on) {
        machine.states[key].on = task.on
      }
    })

    // Set first task as the initial state
    if (tasksKeys.length > 0) {
      machine.initial = tasksKeys[0]
    }
  }

  // Parse actionas and guards
  const guards = {};

  if (questionnaire?.tasks?.cond) {
    const condKeys = Object.keys(questionnaire.tasks.cond);

    condKeys.forEach(key => {
      // Condition strings come from a trusted source
      // eslint-disable-next-line no-new-func
      guards[key] = new Function('context', 'event', 'return ' + questionnaire.tasks.cond[key]);
    });
  }

  const options = { actions: { updateContext }, guards };

  return createMachine(machine, options)
}

export default generateMachineFromQuestionnaire

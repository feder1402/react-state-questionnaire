import { useMachine } from '@xstate/react'
import generateMachineFromQuestionnaire from './generateMachineFromQuestionnaire';

const useQuestionnaireMachine = questionnaire => {
  const [state, send] = useMachine(() => generateMachineFromQuestionnaire(questionnaire), { devTools: true })

  // Extract schema and context from current state
  const schema = questionnaire.tasks.properties[state.value]
  const context = state.context
  const currentNode = state

  return [state.value, context, schema, send, currentNode]
}

export default useQuestionnaireMachine

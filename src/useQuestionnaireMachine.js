import { useMachine } from '@xstate/react'
import generateMachineFromQuestionnaire from './generateMachineFromQuestionnaire';

const useQuestionnaireMachine = questionnaire => {
  const [state, send] = useMachine(() => generateMachineFromQuestionnaire(questionnaire), { devTools: true })

  // Extract schema and context from current state
  const schema = questionnaire.tasks.properties[state.value]
  const context = state.context

  return [state.value, context, schema, send]
}

export default useQuestionnaireMachine

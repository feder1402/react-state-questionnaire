import { assign, createMachine } from 'xstate'
import { useMachine } from '@xstate/react'

const updateContext = assign((context, event) => ({
      ...context,
      ...event?.data
    }
  )
)

const isUnhappy = (context, {data}) => {
  return data.rating <= 3;
}

const useQuestionnaireMachine = questionnaire => {
  const [state, send] = useMachine(() => createMachine(questionnaire.machine, { actions: { updateContext }, guards: { isUnhappy } }), { devTools: true })

  const schema = questionnaire.schemas[state.value]
  const context = state.context

  return [state.value, context, schema, send]
}

export default useQuestionnaireMachine

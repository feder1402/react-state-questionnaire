import RenderSchemaForm from './RenderSchemaForm'
import Card from './Card'
import Json from './Json'
import useQuestionnaireMachine from './useQuestionnaireMachine'

import questionnaire from './questionnaire'

const SchemaStateQuestionnaire = () => {
  const [state, context, schema, send] = useQuestionnaireMachine(questionnaire)

  const title = schema.title

  return (
    <div>
      <h1>State: <span style={{color: "green"}}>{state}</span></h1>
      <div style={{ display: 'flex', flex: '1 1 0', justifyItems: 'strech', height: '600px'}}>
        <Card title="Questionnaire">
          <Json json={questionnaire}/>
        </Card>
        <Card title="Current Schema">
          <Json json={schema}/>
        </Card>
        <Card title="Context">
          <Json json={context}/>
        </Card>
        <Card title="Form">
          <h6>{!!title && title}</h6>
          <RenderSchemaForm schema={schema} onSubmit={(data) => send({ type: 'COMPLETED', data })}/>
        </Card>
      </div>
    </div>
  )
}

export default SchemaStateQuestionnaire

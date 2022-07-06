import RenderSchemaForm from './RenderSchemaForm'
import Card from './Card'
import Json from './Json'
import useQuestionnaireMachine from './useQuestionnaireMachine'

import questionnaire from './questionnaire'

const SchemaStateQuestionnaire = () => {
  const [state, context, schema, send, currentNode] = useQuestionnaireMachine(questionnaire)

  const title = schema.title
  const nextEvents = currentNode.nextEvents;
  const done = currentNode.done;

  return (
    <div>
      <h1>State: <span style={{color: "green"}}>{state}</span></h1>
      <h1>Allowed Events: <span style={{color: "green"}}>{nextEvents}</span></h1>
      <h1>Done?: <span style={{color: "green"}}>{done ? "Yes": "No"}</span></h1>
      <div style={{ display: 'flex', flex: '1 1 0', justifyItems: 'strech', height: '600px'}}>
        <Card title="Questionnaire">
          <Json json={questionnaire}/>
        </Card>
        <Card title="Current Task Schema">
          <Json json={schema}/>
        </Card>
        <Card title="Global Context">
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

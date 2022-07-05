/**
 * Renders a JSON object.
 * @param json the JSON object to render
 */
const Json = ({ json }) => (
  <pre>
    <code style={{color: "blue"}}>{JSON.stringify(json, null, 2)}</code>
  </pre>
)

export default Json

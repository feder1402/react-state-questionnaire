
const Card = ({title, children}) => (
  <div style={{ margin: '10px', padding: "10px", border: "1px solid black", minWidth: "300px", overflow: "scroll"  }}>
    <h5>{title}</h5>
    {children}
  </div>
)

export default Card

import { Link } from "react-router-dom"
const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Link to="/hooks/form">Form</Link>
      <br />
      <Link to="/hooks/state">State</Link>
    </div>
  )
}

export default Contact

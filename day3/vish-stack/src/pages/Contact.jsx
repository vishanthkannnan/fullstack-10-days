import { Link } from "react-router-dom"
import { useContext } from "react";
import { userContext } from "./Hooks/UserContext";

const Contact = () => {
  const products=useContext(userContext);

  return (
    <div>

      <h2>Hi da </h2>
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}-{product.price}</li>
        ))}
      </ul>
      <h1>Contact Me</h1>
      <Link to="/hooks/form">Form</Link>
      <br />
      <Link to="/hooks/state">State</Link>
      <br />
      <Link to="/hooks/reducer">Reducer</Link>
      <br />
      <Link to="/hooks/ExReducer">ExReducer</Link>
      <br />
    </div>
  )
}

export default Contact

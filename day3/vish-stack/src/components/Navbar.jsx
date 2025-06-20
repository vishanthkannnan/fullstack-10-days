import { Link } from 'react-router-dom';
import './Navbar.css';
const navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default navbar

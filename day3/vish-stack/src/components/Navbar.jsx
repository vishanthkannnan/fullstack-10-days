import {Link} from 'react-router-dom'
import "./Navbar.css" 
const Navbar = () => {
    return(
        <div >
            <nav>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                
            </ul>
            </nav>
        </div>
    )
}
export default Navbar
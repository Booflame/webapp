import { NavLink } from "react-router-dom";
import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/login">Login</NavLink>

        </nav>
    )
}
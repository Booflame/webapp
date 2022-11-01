import { NavLink } from "react-router-dom";
import './BotNav.css';

// Laura
// nedenfor er BotNav konstrueret med ikoner der fungerer som NavLinks der tager brugeren til en underside som /home, /search, / og /profile
export default function BotNav() {
    return (
        <nav className="botnav">
            <NavLink to="/home"><img className="icons" src="/images/homeicon.png" alt="home icon" /></NavLink>
            <NavLink to="/search"><img className="icons" src="/images/searchicon.png" alt="add icon" /></NavLink>
            <NavLink to="/error"><img className="icons" src="/images/saveicon.png" alt="save icon" /></NavLink>
            <NavLink to="/profile"><img className="icons" src="/images/personicon.png" alt="profile icon" /></NavLink>
        </nav>
    )
}
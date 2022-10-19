import { NavLink } from "react-router-dom";
import './BotNav.css';

export default function BotNav() {
    return (
        <nav className="botnav">
            <NavLink to="/"><img className="icons" src="/images/home_icon.png" alt="home icon" /></NavLink>
            <NavLink to="/"><img className="icons" src="/images/add_icon.png" alt="add icon" /></NavLink>
            <NavLink to="/"><img className="icons" src="/images/save_icon.png" alt="save icon" /></NavLink>
            <NavLink to="/pages/ProfilePage"><img className="icons" src="/images/profile_icon.png" alt="profile icon" /></NavLink>
        </nav>
    )
}
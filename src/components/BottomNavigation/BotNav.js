import { NavLink } from "react-router-dom";
import './BotNav.css';

export default function BotNav() {
    return (
        <nav>
            <NavLink to="/"><img className="icons" src="/images/home_icon.png" alt="home icon"></img></NavLink>
            <NavLink to="/"><img className="icons" src="/images/add_icon.png" alt="add icon"></img></NavLink>
            <NavLink to="/"><img className="icons" src="/images/save_icon.png" alt="save icon"></img></NavLink>
            <NavLink to="/pages/ProfilePage"><img className="icons" src="/images/profile_icon.png" alt="profile icon"></img></NavLink>
        </nav>
    )
}
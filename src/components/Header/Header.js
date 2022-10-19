import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="headerflex">
                <NavLink className="headerimg" to=""><img src="/images/notification.png" alt="Notifications button"/></NavLink>
                <NavLink className="headerlogo" to=""><img src="/images/logo.png" alt="Logo"/></NavLink>
                <NavLink className="headerimg" to=""><img src="/images/search.png" alt="Search button"/></NavLink>
            </div>
        </header>
    );
}
import { NavLink } from "react-router-dom";
import './Header.css'

export default function HeaderHomescreen() {
    return (
        <header>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/home"><img src="/images/otterlogowhite.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}
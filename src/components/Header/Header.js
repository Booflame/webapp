import { NavLink } from "react-router-dom";
import './Header.css'
import { Back } from "../BackButton/Back";

export default function Header() {
    return (
        <header>
            <Back></Back>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/home"><img src="/images/otterlogowhite.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}
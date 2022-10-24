import { NavLink } from "react-router-dom";
import './Header.css'
import { Back } from "../BackButton/Back";

export default function Header() {
    return (
        <header>
            <div className="headerflex">
                <Back></Back>
                <NavLink className="headerlogo" to="/home"><img src="/images/logo.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}
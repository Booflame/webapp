import { NavLink } from "react-router-dom";
import './Header.css'
import { Back } from "../BackButton/Back";

// Freja

// Her bruges den back-funktion der er konstrueret i et component for sig, i headeren, som også består af vores logo i form af et billede
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
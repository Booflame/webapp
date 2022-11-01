import { NavLink } from "react-router-dom";
import './Header.css'

// Freja

// Her er headeren igen konstrueret med et billede, dog her uden back-komponenten, da vi ikke ønsker en tilbagefunktion på homescreen
export default function HeaderHomescreen() {
    return (
        <header>
            <div className="headerflex">
                <NavLink className="headerlogo" to="/home"><img src="/images/otterlogowhite.png" alt="Logo" /></NavLink>
            </div>
        </header>
    );
}
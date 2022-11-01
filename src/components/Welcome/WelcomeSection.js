import { NavLink } from 'react-router-dom';
import './WelcomeSection.css'

// Freja & __

export default function WelcomeSection() {
    return (
        <section className='welcome'>
            <img src="/images/otterlogoweb.png" alt="Logo" />
            <NavLink to="/home" className="welcomebutton" id='wbutton'>START</NavLink>
            <NavLink to="/login" className="welcomebutton" id='wbutton2'>LOGIN</NavLink>
            <div className='opretlink'>
                <h4>Har du ikke en bruger? Opret dig <NavLink to="/opret">her.</NavLink></h4>
            </div>
        </section >
    );
}
import { NavLink } from 'react-router-dom';
import './WelcomeSection.css'
export default function WelcomeSection() {
    return (
        <section className='welcome'>
            <img src="/images/otterlogoweb.png" alt="Logo" />
            <div className='welcomebox'>
                <h1>Velkommen til Otter!</h1>
            </div>
            <NavLink to="/home" className="welcomebutton" id='wbutton'>Kom i gang! </NavLink>
            <NavLink to="/login" className="welcomebutton" id='wbutton2'>Login</NavLink>
        </section >
    );
}
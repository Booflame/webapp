import { NavLink } from 'react-router-dom';
import './WelcomeSection.css'
export default function WelcomeSection() {
    return (
        <section className='welcome'>
            <img src="/images/otterlogoweb.png" alt="Logo" />
            <div className='welcomebox'>
                <h2>Velkommen til Otter!</h2>
                <h3>Vi hjælper dig med at komme på nye ideer, spændende aktiviteter og kreative udfordringer når du skal bruge tid med venner, din partner - eller dig selv!</h3>
            </div>
            <NavLink to="/home" className="welcomebutton" id='wbutton'>START</NavLink>
            <NavLink to="/login" className="welcomebutton" id='wbutton2'>LOGIN</NavLink>
            <div className='opretlink'>
                <h4>Har du ikke en bruger? Opret dig her.</h4>
            </div>
        </section >
    );
}
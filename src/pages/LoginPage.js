import './login.css';
import FormInput from '../components/Input/Input';
import { NavLink } from "react-router-dom";
import { BackLogin } from '../components/BackLanding/BackLogin';

/* Freja, Nichlas & Laura */

export default function LoginPage() {
    return (
        <section className="login">
            <img src="/images/otterlogoweb.png" alt="Logo" />
            <BackLogin></BackLogin>
            <h1 className="login-text">LOGIN</h1>
            <section className="container">
                <form className='login-form'>
                    <FormInput name="Brugernavn" type="email" />
                    <FormInput name="password" type="password" />

                    <NavLink to="/home" className="login-btn"><button className="form-btn">LOGIN</button></NavLink>
                </form>
                <div className='opretlink'>
                    <h4>Har du ikke en bruger? Opret dig <NavLink to="/opret" className="link_opret">her.</NavLink></h4>
                </div>
            </section>

        </section>
    )
}
import './login.css';
import FormInput from '../components/Input/Input';
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <section className="login">
            <img src="/images/otterlogoweb.png" alt="Logo" />

            <section className="container">
                <h1>Login</h1>
                <form className='login-form'>
                    <FormInput name="Brugernavn" type="email" />
                    <FormInput name="password" type="password" />

                    <button className="form-btn">Login</button>
                </form>
                <div className='opretlink'>
                    <h4>Har du ikke en bruger? Opret dig <NavLink to="/login" className="link_opret">her.</NavLink></h4>
                </div>
            </section>

        </section>
    )
}
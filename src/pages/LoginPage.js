import './login.css';
import FormInput from '../components/Input/Input';

export default function LoginPage() {
    return (
        <section className="login">
            <img src="/images/otterlogowebblue.png" alt="Logo" />

            <section className="container">
                <h1>Login</h1>
                <form className='login-form'>
                    <FormInput name="Brugernavn" type="email" />
                    <FormInput name="password" type="password" />

                    <button className="form-btn">Login</button>
                </form>
                <div className='opretlink'>
                    <h4>Har du ikke en bruger? Opret dig her.</h4>
                </div>
            </section>

        </section>
    )
}
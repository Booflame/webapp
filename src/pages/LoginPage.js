import './login.css';
import FormInput from '../components/Input/Input';

export default function LoginPage() {
    return (
        <>
            <section className="container">
                <h1>Login</h1>
                <form className='login-form'>
                    <FormInput name="email" type="email" />
                    <FormInput name="password" type="password" />
                    <button className="form-btn">Login</button>
                </form>
            </section>
        </>
    )
}
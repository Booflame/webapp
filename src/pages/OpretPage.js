import { NavLink } from 'react-router-dom';
import './login.css';
import FormInput from '../components/Input/Input';
import { BackOpret } from '../components/BackLanding/BackOpret';

// Nichlas. (Laura har rettet/tilføjet profil elementer).

export default function OpretPage() {
    return (
        <section className="opret">
            <img src="/images/otterlogoweb.png" alt="Logo" />
            <section className="container">
                <BackOpret></BackOpret>
                <h1 className="opret-text">OPRET BRUGER</h1>
                <div className='opretlink'>
                    <h4>Har du allerede en bruger? Login <NavLink to="/login" className="link_opret">her.</NavLink></h4>
                </div>
                <form className='opret-form'>
                    <FormInput name="Brugernavn*" type="text" />
                    <FormInput name="E-mail*" type="email" />
                    <FormInput name="Adgangskode*" type="password" />
                    <FormInput name="Bekræft Adgangskode*" type="password" />

                    <NavLink to="/home" className="opret-btn"><button className="form-btn">OPRET</button></NavLink>
                </form>
            </section>
        </section >
    );
}
import BotNav from '../BottomNavigation/BotNav';
import Header from '../Header/Header';
import './ErrorSection.css'
import { NavLink } from 'react-router-dom';

// Her er errosiden lavet som et component, hvor den nedhenter headeren og botnat
// Imellem disse to nedhentede components er fejl-billedet indsat og under dette en button der fungerer som NavLink der fører brugeren til /home
export default function ErrorSection() {
    return (
        <section>
            <Header></Header>
            <br></br>
            <br></br>

            <img src="/images/404.png" alt="Fejl 404"></img>
            <br></br>
            <br></br>
            <NavLink to="/home" className="errorbutton"><button className="form-btn">Startside</button></NavLink>

            <BotNav></BotNav>
        </section >
    );
}
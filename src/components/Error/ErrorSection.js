import BotNav from '../BottomNavigation/BotNav';
import Header from '../Header/Header';
import './ErrorSection.css'
import { NavLink } from 'react-router-dom';

// Freja

// Her er error siden lavet som et component, hvor den nedhenter headeren og botnav
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
            <NavLink to="/home" className="errorbutton"><button >Startside</button></NavLink>

            <BotNav></BotNav>
        </section >
    );
}
import Header from '../Header/Header';
import './ErrorSection.css'
export default function ErrorSection() {
    return (
        <section>
            <Header></Header>
            <br></br>
            <br></br>

            <img src="/images/404.png" alt="Fejl 404"></img>
            <br></br>
            <br></br>
            <a href="-" className='errorbutton' id='wbutton'>Startside</a>


        </section >
    );
}
import './HomeSection.css'
import { NavLink } from "react-router-dom";
export default function HomeSection() {
    return (
        <section className='home'>

            {/* https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6 */}
            <div className="scrolling-wrapper">

                <div className="cardminde">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Mit minde</h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory1.png" alt="Logo"></img>
                    <h2 className="cardh2">Trine Høj</h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory3.png" alt="Logo"></img>
                    <h2 className="cardh2">Anders Olsen </h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory4.png" alt="Logo"></img>
                    <h2 className="cardh2">Sandra Zara</h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory5.png" alt="Logo"></img>
                    <h2 className="cardh2">Jeppe Øster</h2>
                </div>
            </div>

            <div className='welcomeh2'>
                <h2>Velkommen</h2>
                <h2>Sofie !</h2>

            </div>

            <div >'
                <NavLink to="/parameter" className='homebutton' id='hbutton'>START</NavLink>

            </div>

            <div className='welcomeh3'>
                <h3>Klik på START for at generere en aktivitet </h3>


            </div>

        </section >
    );
}
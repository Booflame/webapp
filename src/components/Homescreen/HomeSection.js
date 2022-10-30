import './HomeSection.css'
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import Modal1 from "../Modal/Modal1";
import React, { useState } from "react"


export default function HomeSection() {
    const [show, setShow] = useState(false)


    return (
        <section className='home'>

            {/* https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6 */}
            <div className="scrolling-wrapper">

                <div className="cardminde">
                    <div>
                        <button className="minde-btn" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Mit Minde</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn1" onClick={() => setShow(true)}></button>
                        <Modal1 onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Trine Høj</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn2" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Anders Olsen</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn3" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Sandra</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <button className="minde-btn4" onClick={() => setShow(true)}></button>
                    <Modal onClose={() => setShow(false)} show={show} />
                    <h2 className="cardh2">Jeppe Øster</h2>
                </div>
            </div>


            <div className='welcomeh2'>
                <h2>Velkommen</h2>
                <h2>Sofie !</h2>

            </div>

            <div className='welcomeh3'>
                <h3>Klik på START for at generere en aktivitet </h3>


            </div>


            <div className='otterbutton'>
                <img className="ottericon" src="/images/otter_icon.png" alt="otter icon"></img>
                <NavLink to="/parameter" className='homebutton'>START</NavLink>

            </div>

        </section >
    );
}
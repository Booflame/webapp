import { useParams } from "react-router-dom";
import BotNav from "../components/BottomNavigation/BotNav";
import DateItemComponent from "../components/Dates/DateItemComponent";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import Modal1 from "../components/Modal/Modal1";
import React, { useState } from "react"

/* Nichlas */

export default function DateItem() {

    const [show, setShow] = useState(false)

    let params = useParams()
    console.log(params)
    return (
        <>
            <Header />
            <div className="scrolling-wrapper">
                <div className="cardminde">
                    <div>
                        <button className="minde-btn minde-btn1" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Mit Minde</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn minde-btn2" onClick={() => setShow(true)}></button>
                        <Modal1 onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Trine Høj</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn minde-btn3" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Anders Olsen</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn minde-btn4" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Sandra</h2>
                    </div>
                </div>
                <div className="cardminde">
                    <div>
                        <button className="minde-btn minde-btn5" onClick={() => setShow(true)}></button>
                        <Modal onClose={() => setShow(false)} show={show} />
                        <h2 className="cardh2">Jeppe Øster</h2>
                    </div>
                </div>
            </div>
            <DateItemComponent id={params.ItemId} />
            <BotNav />
        </>
    );
}
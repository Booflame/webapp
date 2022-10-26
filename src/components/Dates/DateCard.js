// import './DateCard.css'
import { useState } from 'react';

export default function DateCard() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log(isActive)
    };
    return (
        <section>

            <div className="scene scene--card">

                <div className={isActive ? 'is-flipped' : null}
                    onClick={toggleClass} >
                    <div className="card__face card__face--front">front</div>
                    <div className="card__face card__face--back">back</div>
                </div>
            </div>
            <div className="scene scene--card">
                <div className="card">
                    <div className="card__face card__face--front">front</div>
                    <div className="card__face card__face--back">back</div>
                </div>
            </div>
            <p>Click card to flip.</p>

        </section >
    )



}




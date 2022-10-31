import './ProfileSection.css'
import { NavLink } from 'react-router-dom';

/* Freja */

export default function ProfileSection() {
    return (
        <section >
            <section className='profile'>

                <div>
                    <h2>Sofie Andersen</h2>
                    <h3>SofAndersen99</h3>
                    <br></br>
                    <div className='profilefollow'>
                        <h4>5</h4>
                        <h4>9</h4>
                        <h4>Følgere</h4>
                        <h4>Følger</h4>
                    </div>
                </div>
                <div>
                    <div className="profile-container">
                        <img src="/images/profilepic.png" alt="Avatar" className="image" ></img>
                        <div className="middle">
                            <div className="text">+</div>
                        </div>
                    </div>
                </div>
            </section>

            <NavLink to="/error" className='profile-btn darkblue-btn'>
                Tilføj venner
            </NavLink>

            <section className='mindesection'>
                <h2>Mine seneste minder</h2>
                <section className='mindeflex'>
                    <div>
                        <img src="/images/minde1.png" alt="Avatar" className="image" ></img>
                        <img src="/images/minde2.png" alt="Avatar" className="image" ></img>
                    </div>
                    <div>
                        <img src="/images/minde3.png" alt="Avatar" className="image" ></img>
                        <img src="/images/minde4.png" alt="Avatar" className="image" ></img>
                    </div>

                </section>
            </section>

            <section className='achsection'>
                <h2>Achievements</h2>
                <h3>Mine seneste achievements</h3>
                <div className='achbigcard'>
                    <div className="achcard">
                        <img src="/images/ach1.png" alt="Avatar"></img>
                        <div className="achtext">
                            <h4><b>Ægte romantiker</b></h4>
                            <p>Så solnedgangen med din partner</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="achcard">
                        <img src="/images/ach2.png" alt="Avatar"></img>
                        <div className="achtext">
                            <h4><b>Æblerov for to</b></h4>
                            <p>Gennemførte daten "æbleplukning" med en ven</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="achcard">
                        <img src="/images/ach3.png" alt="Avatar"></img>
                        <div className="achtext">
                            <h4><b>Puzzlemaniac</b></h4>
                            <p>Gennemførte udfordringen "Læg et puslespil på mindst 500 brikker"</p>
                        </div>
                    </div>
                    <hr></hr>
                    <NavLink to="/error" className='profile-btn darkblue-btn'>
                        Se flere
                    </NavLink>
                </div>

                <NavLink to="/" className='profile-btn lightblue-btn'>
                    Log ud
                </NavLink>


            </section>


        </section >
    );
}
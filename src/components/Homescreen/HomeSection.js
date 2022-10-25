import './HomeSection.css'
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
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Trine Høj</h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Anders Olsen </h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Card</h2>
                </div>
                <div className="cardminde">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Card</h2>
                </div>
            </div>

            <div className='welcomeh2'>
                <h2>Velkommen</h2>
                <h2>Sofie !</h2>

            </div>

            <div >
                <a href="-" className='homebutton' id='hbutton'>START</a>

            </div>



        </section >
    );
}
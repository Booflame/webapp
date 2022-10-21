import './HomeSection.css'
export default function HomeSection() {
    return (
        <section className='home'>

            {/* https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6 */}
            <div className="scrolling-wrapper">

                <div className="card">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Mit minde</h2>
                </div>
                <div className="card">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Trine Høj</h2>
                </div>
                <div className="card">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Anders Olsen </h2>
                </div>
                <div className="card">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Card</h2>
                </div>
                <div className="card">
                    <img className="cardimg" src="/images/memory.png" alt="Logo"></img>
                    <h2 className="cardh2">Card</h2>
                </div>
            </div>

            <div className='flexhomebutton'>
                <a href="-" className='homebutton' id='hbutton'>Kom i gang! </a>

                <a href="-" className='homebutton' id='hbutton2' >Opret dig </a>
            </div>



        </section >
    );
}
import './switch.css';
export default function Switch() {

    const labels = document.querySelectorAll(".radio-label");
    const ring = document.querySelector("#ring")

    labels.forEach(label => {
        label.addEventListener("click", () => {
            const labelWidth = getComputedStyle(label).width;
            const labelHeight = getComputedStyle(label).height;
            const labelX = label.getBoundingClientRect().left;
            const labelY = label.getBoundingClientRect().top;

            console.log(labelX)
            ring.style.width = labelWidth;
            ring.style.height = labelHeight;
            ring.style.left = labelX + "px";
            ring.style.top = labelY + "px";
        })
    });

    return (
        <form className='form-switches'>
            <p>Hvem</p>
            <div className="radio-group-wrapper">
                <div id='ring'></div>
                <div className="radio-wrapper">
                    <input id="one" type="radio" name="who" />
                    <label className='radio-label' htmlFor="one">Mig</label>
                </div>
                <div className="radio-wrapper">
                    <input id="two" type="radio" name="who" />
                    <label className='radio-label' htmlFor="two">Partner</label>
                </div>
                <div className="radio-wrapper">
                    <input id="tre" type="radio" name="who" />
                    <label className='radio-label' htmlFor="tre">Venner</label>
                </div>
            </div>

            <p>Hvor</p>
            <div className="radio-group-wrapper">
                <div id='ring'></div>
                <div className="radio-wrapper">
                    <input id="one" type="radio" name="where" />
                    <label className='radio-label' htmlFor="one">Hjemme</label>
                </div>
                <div className="radio-wrapper">
                    <input id="two" type="radio" name="where" />
                    <label className='radio-label' htmlFor="two">Ude</label>
                </div>
                <div className="radio-wrapper">
                    <input id="tre" type="radio" name="where" />
                    <label className='radio-label' htmlFor="tre">Begge</label>
                </div>
            </div>

            <p>Hvornår</p>
            <div className="radio-group-wrapper">
                <div id='ring'></div>
                <div className="radio-wrapper">
                    <input id="one" type="radio" name="when" />
                    <label className='radio-label' htmlFor="one">Dag</label>
                </div>
                <div className="radio-wrapper">
                    <input id="two" type="radio" name="when" />
                    <label className='radio-label' htmlFor="two">Aften</label>
                </div>
                <div className="radio-wrapper">
                    <input id="tre" type="radio" name="when" />
                    <label className='radio-label' htmlFor="tre">Hele dagen</label>
                </div>
            </div>

            <p>Budget</p>
            <div className="radio-group-wrapper">
                <div id='ring'></div>
                <div className="radio-wrapper">
                    <input id="one" type="radio" name="budget" />
                    <label className='radio-label' htmlFor="one">Gratis</label>
                </div>
                <div className="radio-wrapper">
                    <input id="two" type="radio" name="budget" />
                    <label className='radio-label' htmlFor="two">$</label>
                </div>
                <div className="radio-wrapper">
                    <input id="tre" type="radio" name="budget" />
                    <label className='radio-label' htmlFor="tre">$$</label>
                </div>
                <div className="radio-wrapper">
                    <input id="fire" type="radio" name="budget" />
                    <label className='radio-label' htmlFor="fire">$$$</label>
                </div>
            </div>
        </form>
    );
};
import './switch.css';
export default function Switch() {

    const labels = document.querySelectorAll(".radio-label");
    // const ring = document.querySelector(".ring")

    labels.forEach(label => {
        label.addEventListener("click", () => {
            const labelWidth = getComputedStyle(label).width;
            const labelHeight = getComputedStyle(label).height;
            const labelX = label.getBoundingClientRect().left;
            const labelY = label.getBoundingClientRect().top;

            const nodeRing = label.parentElement.parentElement.firstChild;
            nodeRing.style.width = labelWidth;
            nodeRing.style.height = labelHeight;
            nodeRing.style.left = labelX + "px";
            nodeRing.style.top = labelY + "px";
        })
    });

    return (
        <form className='form-switches'>
            <p>Hvem</p>
            <div className="radio-group-wrapper" data-group="who">
                <div className='ring'></div>
                <div className="radio-wrapper">
                    <input id="who1" type="radio" name="who" />
                    <label className='radio-label' htmlFor="who1">Mig</label>
                </div>
                <div className="radio-wrapper">
                    <input id="who2" type="radio" name="who" />
                    <label className='radio-label' htmlFor="who2">Partner</label>
                </div>
                <div className="radio-wrapper">
                    <input id="who3" type="radio" name="who" />
                    <label className='radio-label' htmlFor="who3">Venner</label>
                </div>
            </div>

            <p>Hvor</p>
            <div className="radio-group-wrapper" data-group="where">
                <div className='ring'></div>
                <div className="radio-wrapper">
                    <input id="where1" type="radio" name="where" />
                    <label className='radio-label' htmlFor="where1">Hjemme</label>
                </div>
                <div className="radio-wrapper">
                    <input id="where2" type="radio" name="where" />
                    <label className='radio-label' htmlFor="where2">Ude</label>
                </div>
                <div className="radio-wrapper">
                    <input id="where2" type="radio" name="where" />
                    <label className='radio-label' htmlFor="where2">Begge</label>
                </div>
            </div>

            <p>Hvornår</p>
            <div className="radio-group-wrapper">
                <div className='ring'></div>
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
                <div className='ring'></div>
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
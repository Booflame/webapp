import './switch.css';
export default function Switch() {

    const labels = document.querySelectorAll(".radio-label");
    const rings = document.querySelectorAll(".ring")

    rings.forEach(ring => {
        const startX = ring.dataset.startX;
        const startY = ring.dataset.startY;
        
        ring.style.left = startX;
        ring.style.top = startY;

    })

    labels.forEach(label => {
        label.addEventListener("click", () => {
            const labelWidth = getComputedStyle(label).width;
            const labelHeight = getComputedStyle(label).height;
            const labelX = label.getBoundingClientRect().left;
            const labelY = label.getBoundingClientRect().top;

            const ring = label.parentElement.parentElement.firstChild;
            ring.style.width = labelWidth;
            ring.style.height = labelHeight;
            ring.style.left = labelX + "px";
            ring.style.top = labelY + "px";
        });
    });

    return (
        <form className='form-switches'>
            <p>Hvem</p>
            <div className="radio-group-wrapper" data-group="who">
                <div className='ring' data-start-x="53.375px" data-start-y="151.5px"></div>
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
                <div className='ring' data-start-x="51.1094px" data-start-y="257.5px"></div>
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
                <div className='ring' data-start-x="51.1094px" data-start-y="363.5px"></div>
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
                <div className='ring' data-start-x="41.9375px" data-start-y="469.5px"></div>
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
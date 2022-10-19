import './switch.css';
export default function Switch(){

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

    return(
        <form className='form-switches'>
            <p>vælg én</p>
            <div className="radio-group-wrapper">
                <div id='ring'></div>
                <div className="radio-wrapper">
                    <input id="one" type="radio" name="hvor"/>
                    <label className='radio-label' htmlFor="one">one</label>
                </div>
                <div className="radio-wrapper">
                    <input id="two" type="radio" name="hvor"/>
                    <label className='radio-label' htmlFor="two">two</label>
                </div>
                <div className="radio-wrapper">
                    <input id="tre" type="radio" name="hvor"/>
                    <label className='radio-label' htmlFor="tre">tre</label>
                </div>
            </div>
        </form>
    );
};
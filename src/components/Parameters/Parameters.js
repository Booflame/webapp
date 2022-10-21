import './Parameters.css';
import Switch from '../Switch/Switch';

export default function Parameter() {

    const rings = document.querySelectorAll(".ring")

    rings.forEach(ring => {
        const startX = ring.dataset.startX;
        const startY = ring.dataset.startY;

        ring.style.left = startX;
        ring.style.top = startY;

    })

    return (
        <form className='form-switches'>
            <p>Hvem</p>
            <div className="radio-group-wrapper" data-group="who">
                <div className='ring' data-start-x="53.375px" data-start-y="151.5px"></div>
                <Switch name="who1" group="who" value="mig" />
                <Switch name="who2" group="who" value="partner" />
                <Switch name="who3" group="who" value="venner" />
            </div>
            <p>Hvor</p>
            <div className="radio-group-wrapper" data-group="where">
                <div className='ring' data-start-x="51.1094px" data-start-y="257.5px"></div>
                <Switch name="where1" group="where" value="Ude" />
                <Switch name="where2" group="where" value="Hjemme" />
                <Switch name="where3" group="where" value="Begge" />
            </div>
            <p>Hvornår</p>
            <div className="radio-group-wrapper">
                <div className='ring' data-start-x="51.1094px" data-start-y="363.5px"></div>
                <Switch name="when1" group="when" value="Dag" />
                <Switch name="when2" group="when" value="Aften" />
                <Switch name="when3" group="when" value="Hele dagen" />
            </div>
            <p>Budget</p>
            <div className="radio-group-wrapper">
                <div className='ring' data-start-x="41.9375px" data-start-y="469.5px"></div>
                <Switch name="budget1" group="budget" value="Gratis" />
                <Switch name="budget2" group="budget" value="$" />
                <Switch name="budget3" group="budget" value="$$" />
                <Switch name="budget4" group="budget" value="$$$" />
            </div>
        </form>
    );
};
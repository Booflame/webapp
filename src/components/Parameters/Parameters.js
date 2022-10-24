import './Parameters.css';
import Switch from '../Switch/Switch';

export default function Parameter() {

    function HandleSubmit(e) {
        e.preventDefault()
        // console.log(radio)
    }

    function HandleChange(e) {
        const value = e.target.nextSibling.textContent;
        console.log(value)
    }

    return (
        <form className='form-switches' onSubmit={HandleSubmit}>
            <p>Hvem</p>
            <div onChange={HandleChange} className="radio-group-wrapper" data-group="who">
                <Switch name="who1" group="who" value="Mig" />
                <Switch name="who2" group="who" value="Partner" />
                <Switch name="who3" group="who" value="Venner" />
            </div>
            <p>Hvor</p>
            <div onChange={HandleChange} className="radio-group-wrapper" data-group="where">
                <Switch name="where1" group="where" value="Ude" />
                <Switch name="where2" group="where" value="Hjemme" />
                <Switch name="where3" group="where" value="Begge" />
            </div>
            <p>Hvornår</p>
            <div onChange={HandleChange} className="radio-group-wrapper">
                <Switch name="when1" group="when" value="Dag" />
                <Switch name="when2" group="when" value="Aften" />
                <Switch name="when3" group="when" value="Hele dagen" />
            </div>
            <p>Budget</p>
            <div onChange={HandleChange} className="radio-group-wrapper">
                <Switch name="budget1" group="budget" value="Gratis" />
                <Switch name="budget2" group="budget" value="$" />
                <Switch name="budget3" group="budget" value="$$" />
                <Switch name="budget4" group="budget" value="$$$" />
            </div>
            <button className='parameter-btn'>Opret</button>
        </form>
    );
};
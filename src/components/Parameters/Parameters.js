import './Parameters.css';
import Switch from '../Switch/Switch';
import { useState } from 'react';

export default function Parameter() {

    const [values, setValues] = useState({})

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(values)
    }

    return (
        <form className='form-switches' onSubmit={HandleSubmit}>
            <p>Hvem</p>
            <div onChange={e => setValues({...values, who: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Switch name="who1" group="who" value="Mig" />
                <Switch name="who2" group="who" value="Partner" />
                <Switch name="who3" group="who" value="Venner" />
            </div>
            <p>Hvor</p>
            <div onChange={e => setValues({...values, where: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Switch name="where1" group="where" value="Ude" />
                <Switch name="where2" group="where" value="Hjemme" />
                <Switch name="where3" group="where" value="Begge" />
            </div>
            <p>Hvornår</p>
            <div onChange={e => setValues({...values, when: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Switch name="when1" group="when" value="Dag" />
                <Switch name="when2" group="when" value="Aften" />
                <Switch name="when3" group="when" value="Hele dagen" />
            </div>
            <p>Budget</p>
            <div onChange={e => setValues({...values, budget: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Switch name="budget1" group="budget" value="Gratis" />
                <Switch name="budget2" group="budget" value="$" />
                <Switch name="budget3" group="budget" value="$$" />
                <Switch name="budget4" group="budget" value="$$$" />
            </div>
            <button className='parameter-btn'>Opret</button>
        </form>
    );
};
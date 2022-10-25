import './Parameters.css';
import Radio from '../Radio/Radio';
import { useState } from 'react';

export default function Parameter() {

    const [values, setValues] = useState({})

    function HandleSubmit(e) {
        e.preventDefault()
        sessionStorage.setItem("who", values.who)
        sessionStorage.setItem("where", values.where)
        sessionStorage.setItem("when", values.when)
        sessionStorage.setItem("budget", values.budget)
        window.open("/date")
    }

    return (
        <form className='form-switches' onSubmit={HandleSubmit}>
            <p>Hvem</p>
            <div onChange={e => setValues({...values, who: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Radio name="who1" group="who" value="Mig" />
                <Radio name="who2" group="who" value="Partner" />
                <Radio name="who3" group="who" value="Venner" />
            </div>
            <p>Hvor</p>
            <div onChange={e => setValues({...values, where: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Radio name="where1" group="where" value="Ude" />
                <Radio name="where2" group="where" value="Hjemme" />
                <Radio name="where3" group="where" value="Begge" />
            </div>
            <p>Hvornår</p>
            <div onChange={e => setValues({...values, when: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Radio name="when1" group="when" value="Dag" />
                <Radio name="when2" group="when" value="Aften" />
                <Radio name="when3" group="when" value="Hele dagen" />
            </div>
            <p>Budget</p>
            <div onChange={e => setValues({...values, budget: e.target.nextSibling.textContent})} className="radio-group-wrapper">
                <Radio name="budget1" group="budget" value="Gratis" />
                <Radio name="budget2" group="budget" value="$" />
                <Radio name="budget3" group="budget" value="$$" />
                <Radio name="budget4" group="budget" value="$$$" />
            </div>
            <button className='parameter-btn'>Opret</button>
        </form>
    );
};
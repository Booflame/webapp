import './Parameters.css';
import Radio from '../Radio/Radio';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Parameter() {

    const [values, setValues] = useState({})
    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault()
        navigate("../date", {
            state: {
                who: values.who,
                where: values.where,
                when: values.when,
                budget: values.budget
            }
        })
    }

    return (
        <form className='form-switches' onSubmit={HandleSubmit}>
            <p>Hvem</p>
            <div onChange={e => setValues({...values, who: e.target.value})} className="radio-group-wrapper">
                <Radio name="who1" group="who" value="Mig" />
                <Radio name="who2" group="who" value="Partner" />
                <Radio name="who3" group="who" value="Venner" />
            </div>
            <p>Hvor</p>
            <div onChange={e => setValues({...values, where: e.target.value})} className="radio-group-wrapper">
                <Radio name="where1" group="where" value="Ude" />
                <Radio name="where2" group="where" value="Hjemme" />
                <Radio name="where3" group="where" value="Begge" />
            </div>
            <p>Hvornår</p>
            <div onChange={e => setValues({...values, when: e.target.value})} className="radio-group-wrapper">
                <Radio name="when1" group="when" value="Dag" />
                <Radio name="when2" group="when" value="Aften" />
                <Radio name="when3" group="when" value="Hele dagen" />
            </div>
            <p>Budget</p>
            <div onChange={e => setValues({...values, budget: e.target.value})} className="radio-group-wrapper">
                <Radio name="budget1" group="budget" value="Gratis" />
                <Radio name="budget2" group="budget" value="$" />
                <Radio name="budget3" group="budget" value="$$" />
                <Radio name="budget4" group="budget" value="$$$" />
            </div>
            <button className='parameter-btn'>Opret</button>
        </form>
    );
};
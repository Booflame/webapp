import './radio.css';

export default function Radio({name, group, value}) {

    return (
        <div className="radio-wrapper">
            <input id={name} type="radio" name={group} />
            <label className='radio-label' htmlFor={name}>{value}</label>
        </div>
    )
}
import './radio.css';

// Nichlas

export default function Radio({ name, group, value }) {

    return (
        <div className="radio-wrapper">
            <input id={name} type="radio" name={group} value={value} />
            <label className='radio-label' htmlFor={name}>{value}</label>
        </div>
    )
}
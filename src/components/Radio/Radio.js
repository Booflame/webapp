import './radio.css';

// Nichlas

export default function Radio({ id, group, value }) {

    return (
        <div className="radio-wrapper">
            <input id={id} type="radio" name={group} value={value} />
            <label className='radio-label' htmlFor={id}>{value}</label>
        </div>
    )
}
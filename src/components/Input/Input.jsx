import './Input.css';

// Nichlas

export default function Input({name, type}){
    return(

        <div className='input-wrapper'>
            <input className="form-input" id={name} type={type || "text"} placeholder={name}/>
            <label className="form-label" htmlFor={name} name={name}>{name}</label>
        </div>
    )
}
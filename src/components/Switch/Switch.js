import { useState } from 'react';
import './switch.css';

export default function Switch({name, group, value}) {

     useState("");

    function moveRing(e) {
        const label = e.target
        
        const labelWidth = getComputedStyle(label).width
        const labelHeight = getComputedStyle(label).height
        const labelX = label.getBoundingClientRect().left
        const labelY = label.getBoundingClientRect().top

        const ring = label.parentElement.parentElement.firstChild
        ring.style.width = labelWidth
        ring.style.height = labelHeight
        ring.style.left = labelX + "px"
        ring.style.top = labelY + "px"
    }

    return (
        <div className="radio-wrapper">
            <input id={name} type="radio" name={group} />
            <label onClick={e => moveRing(e)} className='radio-label' htmlFor={name}>{value}</label>
        </div>
    )
}
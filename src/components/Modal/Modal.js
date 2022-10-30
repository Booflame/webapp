import React from 'react'
import './Modal.css'

const Modal = props => {
    if (!props.show) {
        return null
    }


    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Dit Minde</h4>
                </div>
                <div className="modal-body">
                    <img src="/images/memory.png" alt="mit minde"></img>
                    <p>Den flotteste solnedgang over Aarhus...</p>
                    <p className="date-tid"><i>Date gennemført 25/10/2022</i></p>
                </div>
                <div className="modal-footer">
                    <button className="close-btn" onClick={props.onClose}>Luk</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
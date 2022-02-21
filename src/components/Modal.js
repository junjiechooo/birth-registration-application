import React from 'react'
import '../App.css';

const Modal = ({ onClose }) => {
  return (
    <div className='modal is-active'>
        <div className='modal-background' onClick={onClose}>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>Your answer</p>
                    <button className='delete' onClick={onClose}></button>
                </header>
                <section className='modal-card-body-content'>
                    <ul>
                        <li>Requirement 1</li>
                        <li>Requirement 2</li>
                        <li>Requirement 3</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Modal;
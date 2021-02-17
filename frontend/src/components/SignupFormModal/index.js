import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css';

function SignupFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="signup" onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default SignupFormModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import MeasurementForm from './Measurement';

function MeasurementFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="measurements" onClick={() => setShowModal(true)}>Measurements</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <MeasurementForm />
                </Modal>
            )}
        </>
    )
}

export default MeasurementFormModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddressForm from './Address';

function AddressFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="address" onClick={() => setShowModal(true)}>Address</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddressForm />
                </Modal>
            )}
        </>
    )
}

export default AddressFormModal;

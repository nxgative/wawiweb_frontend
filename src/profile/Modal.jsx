import Modal from 'react-modal';
import React, { useState } from 'react';
import './Modal.css'
import Register from '../profile/Register';

const RegisterModal = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='modal-container'>
                <button onClick={handleOpenModal}> Crea tu cuenta </button>
                <Modal
                    isOpen={showModal}
                    onRequestClose={() => handleCloseModal}
                    ariaHideApp={false}
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <Register />
                    <div className='buttns'>
                        <button className='cerrar_butt' onClick={handleCloseModal}> Cerrar </button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default RegisterModal;
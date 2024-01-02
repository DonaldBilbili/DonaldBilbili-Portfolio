import React from 'react'
import './ModalStyle.css';
import CV from './CV';


const ModalForm = ({ closeModal }) => {
  return (
    <div className="modal">

      <div className="modal-content">
      
        <span className="close" onClick={closeModal}>&times;</span>
        
        
        <CV />
      </div>
    </div>
  );
};
  

export default ModalForm;
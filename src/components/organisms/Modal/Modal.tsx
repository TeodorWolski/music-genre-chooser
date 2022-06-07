import React from 'react';
import { ModalWrapper } from './Modal.styles';

interface ModalInterface {
  handleClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalInterface> = ({ handleClose, isOpen }) => {
  return (
    <ModalWrapper
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <div>
        <input type="text" />
        <button onClick={handleClose}>Close</button>
      </div>
    </ModalWrapper>
  );
};
export default Modal;

import React from 'react';
import { ModalWrapper, InputsWrapper, Wrapper } from './Modal.styles';

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
      <Wrapper>
        <h1>Add new </h1>
        <InputsWrapper>
          <input type="text" placeholder="Genre name" />
          <input type="text" placeholder="Artist example" />
          <input type="text" placeholder="Spotify url" />
          <input type="file" placeholder="Picture" />
        </InputsWrapper>
        <div>
          <button>Add new genre!</button>
          <button style={{ backgroundColor: 'red' }} onClick={handleClose}>
            Close
          </button>
        </div>
      </Wrapper>
    </ModalWrapper>
  );
};
export default Modal;

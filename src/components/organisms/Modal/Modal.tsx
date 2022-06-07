import { useState, useRef } from 'react';
import { Genre } from 'types/types';
import { ModalWrapper, InputsWrapper, Wrapper } from './Modal.styles';

interface ModalInterface {
  handleClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalInterface> = ({ handleClose, isOpen }) => {
  const [newGenre, setNewGenre] = useState<Genre>();
  const nameRef = useRef<HTMLInputElement>(null);
  const artistRef = useRef<HTMLInputElement>(null);
  const spotifyRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);

  return (
    <ModalWrapper
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <Wrapper>
        <h1>Add new </h1>
        <InputsWrapper>
          <input ref={nameRef} type="text" placeholder="Genre name" />
          <input ref={artistRef} type="text" placeholder="Artist example" />
          <input ref={spotifyRef} type="text" placeholder="Spotify url" />
          <input ref={photoRef} type="file" placeholder="Picture" />
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

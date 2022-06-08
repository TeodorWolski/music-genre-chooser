import { useState, useRef } from 'react';
import { ModalWrapper, InputsWrapper, Wrapper } from './Modal.styles';

interface ModalInterface {
  handleClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalInterface> = ({ handleClose, isOpen }) => {
  const [newGenre, setNewGenre] = useState<null | object>({});
  const id: number = Math.floor(Math.random() * 100);
  const nameRef = useRef<HTMLInputElement>(null);
  const artistRef = useRef<HTMLInputElement>(null);
  const spotifyRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nameRef.current ||
      artistRef.current ||
      spotifyRef.current ||
      photoRef.current
    ) {
      setNewGenre({
        id: id,
        genre: nameRef.current?.value,
        artist: artistRef.current?.value,
        url: spotifyRef.current?.value,
        image: photoRef.current?.value,
      });
    }

    console.log(newGenre);
  };

  return (
    <ModalWrapper
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <Wrapper onSubmit={handleSubmit}>
        <h1>Add new </h1>
        <InputsWrapper>
          <input ref={nameRef} type="text" required placeholder="Genre name" />
          <input
            ref={artistRef}
            type="text"
            required
            placeholder="Artist example"
          />
          <input
            ref={spotifyRef}
            type="text"
            required
            placeholder="Spotify url"
          />
          <input ref={photoRef} type="file" required placeholder="Picture" />
        </InputsWrapper>
        <div>
          <button type="submit">Add new genre!</button>
          <button style={{ backgroundColor: 'red' }} onClick={handleClose}>
            Close
          </button>
        </div>
      </Wrapper>
    </ModalWrapper>
  );
};
export default Modal;

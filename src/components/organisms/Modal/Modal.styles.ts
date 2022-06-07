import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  div {
    height: 30rem;
    width: 10rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.form`
  border-radius: 2rem;
  height: 50rem;
  width: 30rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: black;

    &::after {
      content: 'genre!';
      color: ${({ theme }) => theme.colors.green};
    }
  }

  div {
    display: flex;
    margin-top: 2rem;

    button {
      margin: 0 1rem 0;
      border: none;
      padding: 1rem;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    padding: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.green};
    margin-top: 2rem;
    border-radius: 2rem;
    width: 80%;
    outline: none;

    &::file-selector-button {
      border: none;
      color: gray;
      background: transparent;
    }
  }
`;

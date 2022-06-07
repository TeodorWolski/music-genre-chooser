import styled from 'styled-components';

export const Wrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: absolute;
  background-color: #fff;
  width: 30rem;
  top: 105%;
  height: 25rem;
  border-radius: 2rem;
  flex-direction: column;
  color: black;
  list-style: none;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: center;
  background-color: #f7f8fa;
`;

export const NoMatches = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    border: none;
    height: 3rem;
    width: 10rem;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 3rem;
  }
`;

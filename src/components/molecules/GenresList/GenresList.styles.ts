import styled from 'styled-components';

export const Wrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: absolute;
  background-color: #fff;
  width: 30rem;
  top: 105%;
  height: 20rem;
  border-radius: 2rem;
  flex-direction: column;
  color: black;
  list-style: none;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: center;
`;

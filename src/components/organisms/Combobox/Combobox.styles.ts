import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    padding: 1rem;
    width: 25rem;
    border-radius: 3rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 3px solid ${({ theme }) => theme.colors.green};
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 1.25rem;
  color: white;
  padding: 1.25rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

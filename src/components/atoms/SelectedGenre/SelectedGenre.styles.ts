import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  border-radius: 2rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  button {
    background: transparent;
    color: white;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

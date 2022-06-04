import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: ' genre.';
    color: ${({ theme }) => theme.colors.green};
  }
`;

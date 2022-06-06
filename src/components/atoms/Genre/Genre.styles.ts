import styled from 'styled-components';

export const GenreWrapper = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 20% 40% 50%;
  border: 1px solid;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 1rem 2.5rem;
`;

export const ImageWrapper = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    object-fit: cover;
    border-radius: inherit;
    height: 100%;
    width: 120%;
    padding: 0;
    margin: 0;
    border: 3px solid ${({ theme }) => theme.colors.green};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  h1 {
    transform: translateY(45%);
  }

  p {
    transform: translateY(-75%);
    width: 13rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    strong {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const SpotifyLink = styled.a<{ icon: string }>`
  margin-left: 7rem;
  height: 3.5rem;
  width: 3.5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
`;

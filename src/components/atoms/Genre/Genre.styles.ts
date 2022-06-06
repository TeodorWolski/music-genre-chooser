import styled from 'styled-components';

export const GenreWrapper = styled.li`
  display: grid;
  width: 95%;
  grid-template-columns: 20% 40% 50%;
  background-color: white;
  height: 10rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const ImageWrapper = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.green};

  img {
    object-fit: cover;
    border-radius: inherit;
    height: 100%;
    width: 10rem;
    padding: 0;
    margin: 0;
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
  margin-left: 6.5rem;
  height: 3.5rem;
  width: 3.5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
`;

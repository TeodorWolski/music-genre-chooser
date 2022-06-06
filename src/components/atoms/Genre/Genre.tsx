import styled from 'styled-components';
import { Genre as Props } from 'types/types';

const GenreWrapper = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 20% 40% 50%;
  border: 1px solid;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 1rem 2.5rem;
`;

const ImageWrapper = styled.div`
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

const InfoWrapper = styled.div`
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

const Genre: React.FC<Props> = ({ id, genre, artist, image }) => {
  return (
    <GenreWrapper key={id}>
      <ImageWrapper>
        <img src={image} alt="genre" />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{genre}</h1>
        <p>
          artist: <strong>{artist}</strong>
        </p>
      </InfoWrapper>
    </GenreWrapper>
  );
};

export default Genre;

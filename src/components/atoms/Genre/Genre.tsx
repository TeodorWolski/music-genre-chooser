import styled from 'styled-components';
import { Genre as Props } from 'types/types';

const GenreWrapper = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  max-height: 10rem;
`;

const Genre: React.FC<Props> = ({ id, genre, artist, image }) => {
  return (
    <GenreWrapper key={id}>
      <img src={image} alt="genre" />
      <h1>{genre}</h1>
      <p>{artist}</p>
    </GenreWrapper>
  );
};

export default Genre;

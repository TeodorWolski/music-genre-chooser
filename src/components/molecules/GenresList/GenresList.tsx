import { useEffect, useState } from 'react';
import { Genre as Props } from 'types/types';
import axios from 'axios';
import styled from 'styled-components';
import Genre from 'components/atoms/Genre/Genre';

const Wrapper = styled.ul<{ isVisible: boolean }>`
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

const GenresList: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [genres, setGeneres] = useState<Props[] | []>([]);

  useEffect(() => {
    axios.get('/genres').then(({ data }) => setGeneres(data.Genres));
  }, []);
  return (
    <>
      <Wrapper isVisible={isVisible}>
        {genres.map(({ image, genre, id, artist }) => (
          <Genre key={id} id={id} image={image} genre={genre} artist={artist} />
        ))}
      </Wrapper>
    </>
  );
};

export default GenresList;

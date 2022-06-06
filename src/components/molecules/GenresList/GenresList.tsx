import { useEffect, useState } from 'react';
import { Genre as Props } from 'types/types';
import axios from 'axios';
import { Wrapper } from './GenresList.styles';
import Genre from 'components/atoms/Genre/Genre';

const GenresList: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [genres, setGeneres] = useState<Props[] | []>([]);

  useEffect(() => {
    axios.get('/genres').then(({ data }) => setGeneres(data.Genres));
  }, []);
  return (
    <>
      <Wrapper isVisible={isVisible}>
        {genres.map(({ image, genre, id, artist, url }) => (
          <Genre
            url={url}
            key={id}
            id={id}
            image={image}
            genre={genre}
            artist={artist}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default GenresList;

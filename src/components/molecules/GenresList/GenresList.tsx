import { useContext } from 'react';
import { Wrapper } from './GenresList.styles';
import { SelectContext } from 'providers/SelectProvider';
import { ContextProps, Genre as GenreProps } from 'types/types';
import Genre from 'components/atoms/Genre/Genre';

interface Props {
  genresList: GenreProps[];
  isVisible: boolean;
}

const GenresList: React.FC<Props> = ({ isVisible, genresList }) => {
  const { addGenre } = useContext<ContextProps>(SelectContext);

  return (
    <>
      <Wrapper isVisible={isVisible}>
        {genresList.map(({ image, genre, id, artist, url }) => (
          <Genre
            url={url}
            key={id}
            id={id}
            image={image}
            genre={genre}
            artist={artist}
            onClick={() => addGenre(genre, id)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default GenresList;

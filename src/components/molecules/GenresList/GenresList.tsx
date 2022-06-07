import { useContext } from 'react';
import { Wrapper, NoMatches } from './GenresList.styles';
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
        {genresList.length > 0 ? (
          <>
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
          </>
        ) : (
          <NoMatches>
            <h1>No matching genres</h1>
            <button>Create</button>
          </NoMatches>
        )}
      </Wrapper>
    </>
  );
};

export default GenresList;

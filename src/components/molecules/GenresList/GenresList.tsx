import { useEffect, useContext } from 'react';
import { Wrapper } from './GenresList.styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import Genre from 'components/atoms/Genre/Genre';
import { SelectContext } from 'providers/SelectProvider';
import { ContextProps } from 'types/types';

const GenresList: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state: RootState) => state);
  const { addGenre } = useContext<ContextProps>(SelectContext);
  const fetchGenres = () => ({ type: 'GENRES_FETCH_REQUESTED' });

  useEffect(() => {
    dispatch(fetchGenres());
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
            onClick={() => addGenre(genre, id)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default GenresList;

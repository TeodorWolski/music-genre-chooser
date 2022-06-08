import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import { Genre } from 'types/types';
import { Wrapper, Button } from './Combobox.styles';
import { fetchGenres } from 'redux/actions';
import SelectedGenresList from 'components/molecules/SelectedGenresList/SelectedGenresList';
import GenresList from 'components/molecules/GenresList/GenresList';

const Combobox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [searchedItem, setSearchedItem] = useState<Genre[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const fulledGenresList = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  const handleInputChange = () => {
    setVisibility(true);

    if (inputRef.current) {
      setSearchTerm(inputRef.current.value);
    }

    const searchedGenre = fulledGenresList.filter((item) => {
      const searchedTerm = searchTerm.toLowerCase();
      const loweredGenre = item.genre.toLowerCase();

      return loweredGenre.startsWith(searchedTerm);
    });

    setSearchedItem(searchedGenre);
  };

  return (
    <>
      <SelectedGenresList />
      <Wrapper>
        <input
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Genre name"
        />
        <Button onClick={() => setVisibility(!isVisible)}>
          {isVisible ? '↑' : '↓'}
        </Button>
        {searchTerm === '' ? (
          <GenresList genresList={fulledGenresList} isVisible={isVisible} />
        ) : (
          <GenresList genresList={searchedItem} isVisible={isVisible} />
        )}
      </Wrapper>
    </>
  );
};

export default Combobox;

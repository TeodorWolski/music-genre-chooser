import { useState } from 'react';
import { Wrapper, Button } from './Combobox.styles';
import SelectedGenresList from 'components/molecules/SelectedGenresList/SelectedGenresList';
import GenresList from 'components/molecules/GenresList/GenresList';

const Combobox = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleChangeVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <SelectedGenresList />
      <Wrapper>
        <input placeholder="Genre name" />
        <Button onClick={handleChangeVisibility}>
          {isVisible ? '↑' : '↓'}
        </Button>
        <GenresList isVisible={isVisible} />
      </Wrapper>
    </>
  );
};

export default Combobox;

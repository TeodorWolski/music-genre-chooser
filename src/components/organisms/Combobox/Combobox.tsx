import { useState } from 'react';
import { Wrapper, Button } from './Combobox.styles';
import GenresList from 'components/molecules/GenresList/GenresList';
import SelectedGenre from 'components/atoms/SelectedGenre/SelectedGenre';

const Combobox = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleChangeVisibility = () => {
    setVisibility(!isVisible);
  };

  //tutaj wyświetlane selected items

  return (
    <>
      <SelectedGenre genre="masss" />
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

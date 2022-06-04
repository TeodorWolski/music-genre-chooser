import { useState } from 'react';
import { Wrapper } from './Combobox.styles';
import GenresList from 'components/molecules/GenresList/GenresList';

const Combobox = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleChangeVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <Wrapper>
      <input placeholder="Genre name" />
      <button onClick={handleChangeVisibility}>↓</button>
      <GenresList isVisible={isVisible} />
    </Wrapper>
  );
};

export default Combobox;

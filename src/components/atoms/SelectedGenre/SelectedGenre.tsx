import React from 'react';
import { Wrapper } from './SelectedGenre.styles';

const SelectedGenre: React.FC<{ genre: string }> = ({ genre }) => {
  return (
    <Wrapper>
      <p>{genre}</p>
      <button>x</button>
    </Wrapper>
  );
};

export default SelectedGenre;

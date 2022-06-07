import React from 'react';
import { Wrapper } from './SelectedGenre.styles';

const SelectedGenre: React.FC<{ genre: string; id: number }> = ({
  genre,
  id,
}) => {
  return (
    <Wrapper key={id}>
      <p>{genre}</p>
      <button>x</button>
    </Wrapper>
  );
};

export default SelectedGenre;

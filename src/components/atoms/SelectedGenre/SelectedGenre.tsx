import React from 'react';
import { Wrapper } from './SelectedGenre.styles';
import { useContext } from 'react';
import { SelectContext } from 'providers/SelectProvider';
import { ContextProps } from 'types/types';

const SelectedGenre: React.FC<{ genre: string; id: number }> = ({
  genre,
  id,
}) => {
  const { deleteGenre } = useContext<ContextProps>(SelectContext);

  return (
    <Wrapper key={id}>
      <p>{genre}</p>
      <button onClick={() => deleteGenre(id)}>x</button>
    </Wrapper>
  );
};

export default SelectedGenre;

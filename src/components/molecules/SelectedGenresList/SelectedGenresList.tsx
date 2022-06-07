import { useContext } from 'react';
import { Wrapper } from './SelectedGenresList.styles';
import { SelectContext } from 'providers/SelectProvider';
import { ContextProps } from 'types/types';
import SelectedGenre from 'components/atoms/SelectedGenre/SelectedGenre';

const SelectedGenresList = () => {
  const { selectedItems } = useContext<ContextProps>(SelectContext);

  return (
    <Wrapper>
      {selectedItems.map(({ genre, id }) => (
        <SelectedGenre genre={genre} key={id} id={id} />
      ))}
    </Wrapper>
  );
};

export default SelectedGenresList;

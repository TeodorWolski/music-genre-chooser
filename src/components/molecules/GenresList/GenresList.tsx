import { useContext, useState, useEffect } from 'react';
import useKeyPress from 'hooks/useKeyPress';
import { Wrapper, NoMatches } from './GenresList.styles';
import { SelectContext } from 'providers/SelectProvider';
import { ContextProps, Genre as GenreProps } from 'types/types';
import Modal from 'components/organisms/Modal/Modal';
import Genre from 'components/atoms/Genre/Genre';
import useModal from 'hooks/useModal';
interface Props {
  genresList: GenreProps[];
  isVisible: boolean;
}

const GenresList: React.FC<Props> = ({ isVisible, genresList }) => {
  const { addGenre } = useContext<ContextProps>(SelectContext);
  const { handleOpenModal, isOpen, handleCloseModal } = useModal();
  const [isActive, setActive] = useState<boolean>(true);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState<number>(0);
  const [currentGenre, setCurrentGenre] = useState<{
    id: number;
    genre: string;
  }>(genresList[0]);

  useEffect(() => {
    if (genresList.length && downPress) {
      setCursor((prevState) =>
        prevState < genresList.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, genresList.length]);

  useEffect(() => {
    if (genresList.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [genresList.length, upPress]);

  useEffect(() => {
    if (genresList.length && enterPress) {
      setCurrentGenre(genresList[cursor]);
      addGenre(currentGenre?.genre, currentGenre?.id);
    }
  }, [
    addGenre,
    currentGenre?.genre,
    currentGenre?.id,
    cursor,
    enterPress,
    genresList,
  ]);

  useEffect(() => {
    if (genresList.length && currentGenre) {
      setCursor(genresList.indexOf(currentGenre));
    }
  }, [currentGenre, genresList]);

  return (
    <>
      <Wrapper tabIndex={-1} isVisible={isVisible}>
        {genresList.length > 0 ? (
          <>
            {genresList.map(({ image, genre, id, artist, url }, index) => (
              <Genre
                url={url}
                key={id}
                id={id}
                image={image}
                genre={genre}
                artist={artist}
                onClick={() => addGenre(genre, id)}
                isActive={cursor === index && isActive}
                setCurrentGenre={setCurrentGenre}
              />
            ))}
          </>
        ) : (
          <NoMatches>
            <h1>No matching genres</h1>
            <button onClick={handleOpenModal}>Create</button>
          </NoMatches>
        )}
      </Wrapper>
      <Modal isOpen={isOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default GenresList;

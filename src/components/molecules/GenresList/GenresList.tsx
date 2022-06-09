import { useContext, useState } from 'react';
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
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <>
      <Wrapper onKeyDown={() => setActive(!isActive)} isVisible={isVisible}>
        {genresList.length > 0 ? (
          <>
            {genresList.map(({ image, genre, id, artist, url }) => (
              <Genre
                url={url}
                key={id}
                id={id}
                image={image}
                genre={genre}
                artist={artist}
                onClick={() => addGenre(genre, id)}
                isActive={isActive}
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

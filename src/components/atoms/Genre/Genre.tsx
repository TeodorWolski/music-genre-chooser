import {
  GenreWrapper,
  ImageWrapper,
  InfoWrapper,
  SpotifyLink,
} from './Genre.styles';
import { Genre as Props } from 'types/types';
import SpotifyIcon from 'assets/icons/SpotifyIcon.png';

interface GenreProps extends Props {
  onClick?: () => void;
  isActive?: boolean;
  setCurrentGenre?: any;
}

const Genre: React.FC<GenreProps> = (
  { id, genre, artist, url, image, onClick, isActive, setCurrentGenre },
  index
) => {
  return (
    <GenreWrapper
      key={id}
      as="button"
      onClick={onClick}
      isActive={isActive}
      tabIndex={index}
      onMouseEnter={() => setCurrentGenre(genre, id)}
      onMouseLeave={() => setCurrentGenre(undefined)}
    >
      <ImageWrapper>
        <img src={image} alt="genre" />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{genre}</h1>
        <p>
          artist: <strong> {artist}</strong>
        </p>
      </InfoWrapper>
      <SpotifyLink
        tabIndex={-1}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        icon={SpotifyIcon}
      />
    </GenreWrapper>
  );
};

export default Genre;

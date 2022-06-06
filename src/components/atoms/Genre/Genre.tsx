import {
  GenreWrapper,
  ImageWrapper,
  InfoWrapper,
  SpotifyLink,
} from './Genre.styles';
import { Genre as Props } from 'types/types';
import SpotifyIcon from 'assets/icons/SpotifyIcon.png';

const Genre: React.FC<Props> = ({ id, genre, artist, url, image }) => {
  return (
    <GenreWrapper key={id} tabIndex={id}>
      <ImageWrapper>
        <img src={image} alt="genre" />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{genre}</h1>
        <p>
          artist: <strong>{artist}</strong>
        </p>
      </InfoWrapper>
      <SpotifyLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        icon={SpotifyIcon}
      />
    </GenreWrapper>
  );
};

export default Genre;

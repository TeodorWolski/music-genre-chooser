import MetalIcon from 'assets/icons/MetalIcon.jpeg';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import Genre from './Genre';

const mockGenre = {
  id: 1,
  genre: 'Metal',
  artist: 'Metallica',
  image: MetalIcon,
  url: 'https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB',
};

describe('Genre atom', () => {
  it('checks if Genre atom is displaying props value', () => {
    renderWithProviders(
      <Genre
        id={mockGenre.id}
        genre={mockGenre.genre}
        artist={mockGenre.artist}
        image={mockGenre.image}
        url={mockGenre.url}
      />
    );
    screen.getAllByText(/Metallica/);
    screen.getAllByText(/Metal/);
  });
});

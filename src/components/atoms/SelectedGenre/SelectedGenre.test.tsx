import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import SelectedGenre from './SelectedGenre';

const mockSelectedGenre = {
  id: 1,
  genre: 'Metal',
};

describe('SelectedGenre atom', () => {
  it('checks if SelectedGenre atom is displaying props value', () => {
    renderWithProviders(
      <SelectedGenre
        id={mockSelectedGenre.id}
        genre={mockSelectedGenre.genre}
      />
    );

    screen.getAllByText(/Metal/);
  });
});

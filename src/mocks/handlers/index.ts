import { rest } from 'msw';
import { Genre } from 'types/types';
import { data as genres } from 'mocks/data';

export const handlers = [
  rest.get<Genre[]>('/genres', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(genres));
  }),
  rest.put<Genre>('/genres/:id/select', (req, res, ctx) => {
    if (req.params.id) {
      const selectedGenre = genres.filter(
        (genre: Genre) => genre.id.toString() === req.params.id
      );
      return res(ctx.status(200), ctx.json({ selectedGenre }));
    }
  }),
];

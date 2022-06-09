export interface Genre {
  id: number;
  genre: string;
  artist: string;
  image: string;
  url: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ContextProps {
  selectedItems: Genre[] | [];
  addGenre: (genre: string, id: number) => void;
  deleteGenre: (id: number) => void;
}

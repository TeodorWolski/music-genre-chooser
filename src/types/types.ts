export interface Genre {
  id: number;
  genre: string;
  artist: string;
  image: string;
  url: string;
  onClick?: () => void;
}

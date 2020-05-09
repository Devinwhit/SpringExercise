export interface MovieSearch {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<Movie>;
}

export interface Movie {
  popularity: number;
  vote_count: number;
  video: string;
  poster_path: string;
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

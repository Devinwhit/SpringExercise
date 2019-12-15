import { environment } from 'src/environments/environment';

export const routes = {
  movieApi: {
      popularMovies: `${environment.localapi}movies/getpopular/`
  }
};

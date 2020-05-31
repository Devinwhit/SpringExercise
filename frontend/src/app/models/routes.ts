import { environment } from 'src/environments/environment';

export const routes = {
  movieApi: {
      popularMovies: `${environment.localapi}movies/getpopular/`,
      topRatedMovies: `${environment.localapi}movies/gettoprated/`,
      favorites: `${environment.localapi}movies/favorites`
  },
  authApi: {
    auth: `${environment.localapi}api/auth/`,
    roles: `${environment.localapi}api/roles/`
  },
  password: {
    requestEmail: `${environment.localapi}api/forgot-password`,
    confirmToken: `${environment.localapi}api/verify-token`
  }
};

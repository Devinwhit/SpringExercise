import { environment } from 'src/environments/environment';

export const routes = {
  movieApi: {
      popularMovies: `${environment.localapi}movies/getpopular/`,
      topRatedMovies: `${environment.localapi}movies/gettoprated/`,
      favorites: `${environment.localapi}movies/favorites`
  },
  authApi: {
    auth: `${environment.localapi}api/auth/`,
    roles: `${environment.localapi}api/roles/`,
    adminCheck: `${environment.localapi}api/roles/admin`
  },
  password: {
    requestEmail: `${environment.localapi}api/forgot-password`,
    verifyToken: `${environment.localapi}api/verify-token`,
    resetPassword: `${environment.localapi}api/reset-password`
  },
  user: {
    getprofile: `${environment.localapi}api/get-profile`,
    updateProfile: `${environment.localapi}api/update-profile`
  }
};

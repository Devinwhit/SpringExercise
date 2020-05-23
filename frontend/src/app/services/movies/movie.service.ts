import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/models/routes';
import { MovieSearch, Movie } from 'src/app/models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(pageNum: number): Observable<any> {
    return this.http.get<MovieSearch>(`${routes.movieApi.popularMovies}${pageNum}`, {observe: 'response'});
  }

  getTopRatedMovies(pageNum: number): Observable<any> {
    return this.http.get<MovieSearch>(`${routes.movieApi.topRatedMovies}${pageNum}`, {observe: 'response'});
  }

  getFavoriteMovies(): Observable<any> {
    return this.http.get(`${routes.movieApi.favorites}`, {observe: 'response'});
  }

  getMoviesBySort(pageNum: number, sort: string): Observable<any> {
    if (sort === 'Top Rated') {
      return this.getTopRatedMovies(pageNum);
    } else if (sort === 'Popular') {
      return this.getPopularMovies(pageNum);
    } else if (sort === 'My Favorites') {
      return this.getFavoriteMovies();
    }
  }

  isMovieFavorite(movieId: number): Observable<any> {
    return this.http.get(`${routes.movieApi.favorites}/${movieId}`);
  }

  addToFavorites(movie: Movie): Observable<any> {
    return this.http.post(`${routes.movieApi.favorites}/${movie.id}`, movie.id);
  }

  removeFromFavorites(movieId: number): Observable<any> {
    return this.http.delete(`${routes.movieApi.favorites}/${movieId}`);
  }
}

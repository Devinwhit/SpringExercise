import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/models/routes';
import { MovieSearch } from 'src/app/models/movie';
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

  getMoviesBySort(pageNum: number, sort: string): Observable<any> {
    if (sort === 'Top Rated') {
      return this.http.get<MovieSearch>(`${routes.movieApi.topRatedMovies}${pageNum}`, {observe: 'response'});
    } else if (sort === 'Popular') {
      return this.http.get<MovieSearch>(`${routes.movieApi.popularMovies}${pageNum}`, {observe: 'response'});
    }
  }
}

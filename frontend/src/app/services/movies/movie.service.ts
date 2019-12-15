import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/models/routes';
import { PopularMovie } from 'src/app/models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(pageNum: number): Observable<any> {
    return this.http.get<PopularMovie>(`${routes.movieApi.popularMovies}${pageNum}`, {observe: 'response'});
  }
}

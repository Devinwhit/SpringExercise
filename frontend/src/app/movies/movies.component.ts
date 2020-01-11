import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies/movie.service';
import { PopularMovie, Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularmovies: PopularMovie;
  movies: Movie[];
  array = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getPopularMovies(1)
    .subscribe( results => {
      console.log(results);
      this.popularmovies = results.body;
      this.movies = this.popularmovies.results;
    });
  }

  onScroll() {
    console.log('scrolled!!');
  }

}

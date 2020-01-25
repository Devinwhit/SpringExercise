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
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  pageNum = 1;
  color = 'white';

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
    this.movieService.getPopularMovies(++this.pageNum).subscribe(result => {
      result.body.results.forEach(element => {
        this.movies.push(element);
      });
    });
  }

  openDialog(movie: Movie){
    console.log(movie.title);
  }

}

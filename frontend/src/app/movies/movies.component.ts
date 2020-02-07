import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../services/movies/movie.service';
import { PopularMovie, Movie } from '../models/movie';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  regularDistribution = 100 / 3;

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

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
    const dialogRef = this.dialog.open(MovieDetailsDialog, {
      width: '35%',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-dialog/movies.dialog.html',
})
export class MovieDetailsDialog {

  constructor(
    public dialogRef: MatDialogRef<MovieDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../services/movies/movie.service';
import { MovieSearch, Movie } from '../models/movie';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  MovieSearchs: MovieSearch;
  movies: Movie[];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  pageNum = 1;
  color = 'rgba(255, 255, 255, 0.3)';
  selectedSort: string;
  sortOptions: string[] = ['Popular', 'Top Rated'];

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedSort = 'Popular';
    this.movieService.getMoviesBySort(1, this.selectedSort)
    .subscribe( results => {
      console.log(results);
      this.MovieSearchs = results.body;
      this.movies = this.MovieSearchs.results;
    });
  }

  onScroll() {
    console.log('scrolled!!');
    this.movieService.getMoviesBySort(++this.pageNum, this.selectedSort).subscribe(result => {
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

  onSortChange(value){
    console.log(value);
    this.pageNum = 1;
    this.selectedSort = value;
    this.movieService.getMoviesBySort(this.pageNum, this.selectedSort).subscribe(results => {
      this.MovieSearchs = results.body;
      this.movies = this.MovieSearchs.results;
    })
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

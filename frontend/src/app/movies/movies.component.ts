import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MovieService } from '../services/movies/movie.service';
import { MovieSearch, Movie } from '../models/movie';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule } from '@angular/material';

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
  sortOptions: string[] = ['Popular', 'Top Rated', 'My Favorites'];


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
    if (this.selectedSort !== 'My Favorites'){
      this.movieService.getMoviesBySort(++this.pageNum, this.selectedSort).subscribe(result => {
        result.body.results.forEach(element => {
          this.movies.push(element);
        });
      });
    }
  }

  openDialog(movie: Movie){
    const dialogRef = this.dialog.open(MovieDetailsDialog, {
      width: '65%',
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
      if (this.MovieSearchs === undefined) { // error in getting movies, or no favorites
        this.movies = null;
      } else {
        this.movies = this.MovieSearchs.results;
      }
    });
  }

}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-dialog/movies.dialog.html',
  styleUrls: ['./movies.component.css']
})
export class MovieDetailsDialog implements AfterViewInit {

  favoriteIcon = 'favorite_outline';
  favoriteTooltip = 'Add to favorites';
  isFavorite = false;
  constructor(
    public dialogRef: MatDialogRef<MovieDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie, private movieService: MovieService) {}

  ngAfterViewInit() {
    this.movieService.isMovieFavorite(this.movie.id).subscribe(result => {
      if (result) { // movie is a favorite
        this.favoriteIcon = 'favorite';
        this.favoriteTooltip = 'Remove from favorites';
        this.isFavorite = true;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  favoriteMovie(movie: Movie) {
    if (this.isFavorite) { // user is wishing to un-favorite movie
      this.movieService.removeFromFavorites(movie.id).subscribe(del => {
        if (del) { // removal was successful
          this.favoriteIcon = 'favorite_outline';
          this.favoriteTooltip = 'Add to favorites';
          this.isFavorite = false;
        }
      });
    } else {
      this.movieService.addToFavorites(movie).subscribe(add => {
        if (add) { // adding was successful
          this.favoriteIcon = 'favorite';
          this.favoriteTooltip = 'Remove from favorites';
          this.isFavorite = true;
        }
      });
    }
  }
}

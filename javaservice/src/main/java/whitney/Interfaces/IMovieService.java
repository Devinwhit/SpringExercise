package whitney.Interfaces;

import whitney.models.MovieSearch;

public interface IMovieService {

    MovieSearch getPagedPopularMovies(int pageNum);
    MovieSearch getPagedTopRatedMovies(int pageNum);

}

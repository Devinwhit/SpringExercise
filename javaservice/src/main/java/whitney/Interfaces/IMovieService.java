package whitney.Interfaces;

import whitney.models.FavoriteMovie;
import whitney.models.MovieSearch;

import java.util.ArrayList;
import java.util.Set;

public interface IMovieService {

    MovieSearch getPagedPopularMovies(int pageNum);
    MovieSearch getPagedTopRatedMovies(int pageNum);
    boolean saveToFavorites(String username, int movieId );
    MovieSearch getUserFavorites(Set<FavoriteMovie> movieIds);

}

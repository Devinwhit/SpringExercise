package whitney.Interfaces;

import whitney.models.Movie;

public interface IMovieService {

    Movie getPagedPopMovies(int pageNum);

}

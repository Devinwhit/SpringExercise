package whitney.Interfaces;

import whitney.models.PopularMovie;

public interface IMovieService {

    PopularMovie getPagedPopularMovies(int pageNum);

}

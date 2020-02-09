package whitney.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import whitney.Interfaces.IMovieService;
import whitney.models.MovieSearch;

@Service
public class MovieService implements IMovieService {

    @Value("${moviedb.apikey}")
    private String APIKEY;
    @Value("${moviedb.getpopularmovies}")
    private String POPULARMOVIES;
    @Value("${moviedb.gettopratedmovies}")
    private String TOPRATEDMOVIES;

    @Override
    public MovieSearch getPagedPopularMovies(int pageNum) {
        String uri = POPULARMOVIES + "api_key=" + APIKEY + "&lang=en-US&page=" + pageNum; //build request URL
        RestTemplate rest = new RestTemplate();
        MovieSearch movie = rest.getForObject(uri, MovieSearch.class);
        System.out.println(movie.getPage());

        return movie;
    }

    @Override
    public MovieSearch getPagedTopRatedMovies(int pageNum) {
        String uri = TOPRATEDMOVIES + "api_key=" + APIKEY + "&lang=en-US&page=" + pageNum;
        RestTemplate rest = new RestTemplate();
        MovieSearch movie = rest.getForObject(uri, MovieSearch.class);
        return movie;

    }
}

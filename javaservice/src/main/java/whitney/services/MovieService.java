package whitney.services;

import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import whitney.Interfaces.IMovieService;
import whitney.models.Movie;
import whitney.models.PopularMovie;

import java.net.URLEncoder;
import java.util.List;

@Service
public class MovieService implements IMovieService {

    @Value("${moviedb.apikey}")
    private String APIKEY;
    @Value("${moviedb.getpopularmovies}")
    private String POPULARMOVIES;

    @Override
    public PopularMovie getPagedPopularMovies(int pageNum) {
        String uri = POPULARMOVIES + "api_key=" + APIKEY + "&lang=en-US&page=" + pageNum; //build request URL
        RestTemplate rest = new RestTemplate();
        PopularMovie movie = rest.getForObject(uri, PopularMovie.class);
        System.out.println(movie.getPage());

        return movie;
    }
}

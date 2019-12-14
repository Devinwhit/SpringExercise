package whitney.services;

import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import whitney.Interfaces.IMovieService;
import whitney.models.Movie;

import java.net.URLEncoder;
import java.util.List;

@Service
public class MovieService implements IMovieService {

    @Value("${moviedb.apikey")
    private String APIKEY;
    @Value("${moviedb.getpopmovies")
    private String POPULARMOVIES;

    @Override
    public Movie getPagedPopMovies(int pageNum) {
        String uri = POPULARMOVIES + APIKEY + "&lang=en-US&page=" + pageNum; //build request URL
        RestTemplate rest = new RestTemplate();
        ResponseEntity<Movie[]> movies = rest.getForEntity(URLEncoder.encode(uri), Movie[].class);
        System.out.println(movies.getBody()[0].getTitle());

        return null;
    }
}

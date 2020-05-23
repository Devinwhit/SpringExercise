package whitney.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import whitney.Interfaces.IMovieService;
import whitney.models.FavoriteMovie;
import whitney.models.Movie;
import whitney.models.MovieSearch;
import whitney.models.User;
import whitney.repositories.FavoriteRepo;
import whitney.repositories.UserRepo;
import whitney.security.jwt.JwtUtils;
import whitney.security.services.UserDetailsServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class MovieService implements IMovieService {

    @Value("${moviedb.apikey}")
    private String APIKEY;
    @Value("${moviedb.getpopularmovies}")
    private String POPULARMOVIES;
    @Value("${moviedb.gettopratedmovies}")
    private String TOPRATEDMOVIES;
    @Value("${moviedb.getsinglemovie}")
    private String SINGLEMOVIE;
    @Autowired
    UserRepo userRepository;
    @Autowired
    FavoriteRepo favorites;

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

    @Override
    public boolean saveToFavorites(String username, int movieId) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        FavoriteMovie movie = new FavoriteMovie(movieId, user);
        favorites.save(movie);
        if (movie.getId() > 0) {
            return true;
        }
        return false;
    }

    @Override
    public MovieSearch getUserFavorites(Set<FavoriteMovie> favoriteMovies){
        MovieSearch results = new MovieSearch();
        List<Movie> allMovies = new ArrayList<>();
        results.setPage(1);
        for(FavoriteMovie fav : favoriteMovies) {
            int movieId = fav.getMovieId();
            String uri = SINGLEMOVIE + movieId + "?api_key=" + APIKEY + "&lang=en-US";
            RestTemplate rest = new RestTemplate();
            Movie movie = rest.getForObject(uri, Movie.class);
            allMovies.add(movie);
        }
        results.setResults(allMovies);
        results.setTotal_pages(1);
        results.setTotal_results(allMovies.size());
        return results;
    }
}

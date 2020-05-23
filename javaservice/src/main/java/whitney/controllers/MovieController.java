package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import whitney.models.FavoriteMovie;
import whitney.models.MovieSearch;
import whitney.models.User;
import whitney.repositories.FavoriteRepo;
import whitney.repositories.UserRepo;
import whitney.security.jwt.JwtUtils;
import whitney.services.MovieService;

@RestController
public class MovieController {

    @Autowired
    public MovieService movieService;
    @Autowired
    UserRepo userRepository;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    FavoriteRepo favoriteRepo;

    @RequestMapping(value = "/movies/getpopular/{pageNum}", method = RequestMethod.GET)
    public MovieSearch home(@PathVariable int pageNum) {
        MovieSearch movie = movieService.getPagedPopularMovies(pageNum);
        return movie;
    }

    @RequestMapping(value = "/movies/gettoprated/{pageNum}", method = RequestMethod.GET)
    public MovieSearch topRated(@PathVariable int pageNum) {
        MovieSearch movie = movieService.getPagedTopRatedMovies(pageNum);
        return movie;
    }

    @RequestMapping(value ="/movies/favorites/{movieId}", method= RequestMethod.POST)
    public boolean newFavorite(Authentication authentication, @PathVariable int movieId){
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        FavoriteMovie movie = new FavoriteMovie(movieId, user);
        user.getFavoriteMovies().add(movie);
        try{
            favoriteRepo.save(movie);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @RequestMapping(value ="/movies/favorites", method= RequestMethod.GET)
    public MovieSearch getFavorites(Authentication authentication){
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        return movieService.getUserFavorites(user.getFavoriteMovies());
    }


    @RequestMapping(value ="/movies/favorites/{movieId}", method= RequestMethod.GET)
    public boolean checkFavorite(Authentication authentication, @PathVariable int movieId){
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        FavoriteMovie movie = new FavoriteMovie(movieId, user);
        if (user.getFavoriteMovies().contains(movie)){
            return true;
        }
        return false;
    }

    @RequestMapping(value ="/movies/favorites/{movieId}", method= RequestMethod.DELETE)
    public boolean removeFavorite(Authentication authentication, @PathVariable int movieId) {
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        FavoriteMovie movie = user.getFavoriteMovies().stream().filter(m -> m.getMovieId() == movieId).findFirst().get();
        try {
            favoriteRepo.delete(movie);
            return true;
        } catch (Error e) {
            return false;
        }

    }
}

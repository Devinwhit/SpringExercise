package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whitney.models.FavoriteMovie;
import whitney.models.MovieSearch;
import whitney.services.MovieService;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MovieController {

    @Autowired
    public MovieService movieService;

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

    @RequestMapping(value ="/movies/favorites", method= RequestMethod.POST)
    public boolean newFavorite(@RequestBody FavoriteMovie favoriteMovie){
        boolean saved = movieService.saveToFavorites(favoriteMovie.getUser().getUsername(),
                favoriteMovie.getMovieId());
        return saved;
    }
}

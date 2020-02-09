package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whitney.models.MovieSearch;
import whitney.services.MovieService;

@CrossOrigin(origins = "*")
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
}

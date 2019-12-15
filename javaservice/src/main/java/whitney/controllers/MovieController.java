package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whitney.models.PopularMovie;
import whitney.services.MovieService;

@CrossOrigin(origins = "*")
@RestController
public class MovieController {

    @Autowired
    public MovieService movieService;

    @RequestMapping(value = "/movies/getpopular/{pageNum}", method = RequestMethod.GET)
    public PopularMovie home(@PathVariable int pageNum) {
        PopularMovie movie = movieService.getPagedPopularMovies(pageNum);
        return movie;
    }
}

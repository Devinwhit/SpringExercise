package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whitney.models.Movie;
import whitney.services.MovieService;

@CrossOrigin(origins = "*")
@RestController
public class MovieController {

    @Autowired
    public MovieService movieService;

    @RequestMapping(value = "/movies/getpopular/{pageNum}", method = RequestMethod.GET)
    public ResponseEntity<?> home(@PathVariable int pageNum) {
        Movie tmp = movieService.getPagedPopMovies(1);
        return null;
    }
}

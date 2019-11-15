package whitney.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import whitney.models.User;
import whitney.models.UserRole;
import whitney.services.SignupService;

import java.util.Arrays;

@RestController
public class SignupController {

    @Autowired
    private SignupService signupService;

    /**
     *
     * user signup
     * @param user
     * @return
     */
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity<?> signup(@RequestBody User user) {
        user.setRoles(Arrays.asList(new UserRole("USER")));
        User newUser = signupService.addUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}

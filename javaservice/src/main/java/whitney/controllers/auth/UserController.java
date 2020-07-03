package whitney.controllers.auth;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import whitney.models.ResetPasswordToken;
import whitney.models.User;
import whitney.models.payload.ResetPasswordRequest;
import whitney.models.response.UserProfileDTO;
import whitney.repositories.ResetPasswordTokenRepo;
import whitney.repositories.UserRepo;
import whitney.security.services.UserDetailsImpl;
import whitney.services.EmailService;
import whitney.services.UserService;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ResetPasswordTokenRepo resetRepo;
    @Value("${whitney.app.frontend}")
    private String FRONTEND;
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserService userService;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/roles/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/roles/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/roles/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/roles/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public boolean adminAccess() {
        return true;
    }

    @PostMapping("/forgot-password")
    public Boolean forgotPassword(@RequestBody String requestEmail){
        User user = userRepo.findByEmail(requestEmail);
        if (user != null) {
            ResetPasswordToken token = new ResetPasswordToken(user);
            resetRepo.save(token);
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(user.getEmail());
            email.setFrom("no-reply@devinwhitney.com");
            email.setSubject("Password Reset Request");
            email.setText("Hello, " + user.getFirstName() +
                    "\nYou recently requested a password reset. To complete this reset, click here:\n" +
                    FRONTEND + "/password-reset?token=" + token.getToken());
            emailService.sendEmail(email);
            return true;
        }
        return false;
    }

    @GetMapping("/verify-token")
    public Boolean verifyToken(@RequestParam("token")String token){
        return userService.verifyToken(token);
    }

    @PostMapping("/reset-password")
    public Boolean resetPassword(@Valid @RequestBody ResetPasswordRequest request){
        if (userService.verifyToken(request.getToken())){
            User user = resetRepo.findByToken(request.getToken()).getUser();
            user.setPassword(encoder.encode(request.getNewPassword()));
            userRepo.save(user);
            return true;
        } else {
            return false;
        }

    }

    @GetMapping("/get-profile")
    public UserProfileDTO getProfileInfo(Authentication auth){
        User user = userRepo.findByUsername(auth.getName()).orElseThrow(() -> new RuntimeException("Error: Username is not found."));
        UserProfileDTO dto = new UserProfileDTO(user.getId(), user.getUsername(), user.getEmail(), user.getFirstName(),
            user.getLastName(), user.getRoles());
        return dto;
    }

    @PostMapping("/update-profile")
    public Boolean updateProfile(Authentication auth, @RequestBody UserProfileDTO newProfile) {
        //check if user is authed
        if (auth.isAuthenticated()) {
            UserDetailsImpl search = (UserDetailsImpl) auth.getPrincipal();
            User oldUser = userRepo.findByUsername(search.getUsername()).orElseThrow(() -> new RuntimeException("Error: Username is not found."));
            oldUser.setEmail(newProfile.getEmail());
            oldUser.setFirstName(newProfile.getFirstName());
            oldUser.setLastName(newProfile.getLastName());
            oldUser.setUsername(newProfile.getUsername());
            userRepo.save(oldUser);
            return true;
        }
        return false;
    }

    @GetMapping("/get-users")
    public List<UserProfileDTO> getAllUsers(){
        Type listType = new TypeToken<List<UserProfileDTO>>(){}.getType();
        return modelMapper.map(userRepo.findAll(), listType);
    }
}

package whitney.controllers.auth;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import whitney.models.ResetPasswordToken;
import whitney.models.User;
import whitney.repositories.ResetPasswordTokenRepo;
import whitney.repositories.UserRepo;
import whitney.services.EmailService;

import java.time.Instant;
import java.time.temporal.ChronoUnit;


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
    public String adminAccess() {
        return "Admin Board.";
    }

    @PostMapping("/forgot-password")
    public Boolean forgotPassword(@RequestBody String requestEmail){
        User user = userRepo.findByEmail(requestEmail);
        if (user != null) {
            ResetPasswordToken token = new ResetPasswordToken(user);
            resetRepo.save(token);
            SimpleMailMessage email = new SimpleMailMessage();
            //email.setTo(user.getEmail());
            email.setTo("Devinwhit@gmail.com");
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
        ResetPasswordToken verifiedToken = resetRepo.findByToken(token);
        final long DAY = 24 * 60 * 60 * 1000;
        if (verifiedToken != null && verifiedToken.getCreatedDate().getTime() > System.currentTimeMillis() - DAY){
            return true;
        }
        return false;
    }
}

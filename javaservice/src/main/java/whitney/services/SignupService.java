package whitney.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whitney.models.User;
import whitney.models.UserRole;
import whitney.repository.UserRepository;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Service
@Transactional
public class SignupService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    /**
     *
     * set up a default user with two roles USER and ADMIN
     *
     */
    @PostConstruct
    private void setupDefaultUser() {
        //-- just to make sure there is an ADMIN user exist in the database for testing purpose
        if (userRepository.count() == 0) {
            userRepository.save(new User("crmadmin",
                   new BCryptPasswordEncoder().encode("adminpass"),
                    Arrays.asList(new UserRole("USER"), new UserRole("ADMIN"))));
        }
    }
}

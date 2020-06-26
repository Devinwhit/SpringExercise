package whitney.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import whitney.models.ResetPasswordToken;
import whitney.models.User;

public interface ResetPasswordTokenRepo extends JpaRepository<ResetPasswordToken, Long> {
    ResetPasswordToken findByToken(String token);
}

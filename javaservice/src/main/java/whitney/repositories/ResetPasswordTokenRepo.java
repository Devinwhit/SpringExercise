package whitney.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import whitney.models.ResetPasswordToken;

public interface ResetPasswordTokenRepo extends JpaRepository<ResetPasswordToken, Long> {
    ResetPasswordToken findByToken(String token);
}

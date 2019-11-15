package whitney.repository;

import org.springframework.data.repository.CrudRepository;
import whitney.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
}

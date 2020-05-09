package whitney.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import whitney.models.FavoriteMovie;

@Repository
public interface FavoriteRepo extends JpaRepository<FavoriteMovie, Long> {
}

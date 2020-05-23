package whitney.models;

import javax.persistence.*;

@Entity
@Table(name = "user_favorite_movies")
public class FavoriteMovie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_id")
    private int movieId;

    @ManyToOne
    private User users;

    public FavoriteMovie() {
    }

    public FavoriteMovie(int movieId, User user) {
        this.movieId = movieId;
        this.users = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public User getUser() {
        return users;
    }

    public void setUser(User user) {
        this.users = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FavoriteMovie that = (FavoriteMovie) o;

        if (movieId != that.movieId) return false;
        return users.equals(that.users);
    }

    @Override
    public int hashCode() {
        int result = movieId;
        result = 31 * result + users.hashCode();
        return result;
    }
}

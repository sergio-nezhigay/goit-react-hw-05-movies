import { Title, List, MovieLink } from './MovieList.styled';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieList({ movies, location, title }) {
  return (
    <>
      {!!title.length && <Title>{title}</Title>}
      {!!movies.length && (
        <List>
          {movies.map(movie => (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.poster_path && (
                  <img
                    src={IMAGES_BASE_URL + movie.poster_path}
                    alt={movie.title}
                  />
                )}
                <div>{movie.title}</div>
              </MovieLink>
            </li>
          ))}
        </List>
      )}
    </>
  );
}

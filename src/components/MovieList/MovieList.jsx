import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from './MovieList.styled';

export default function MovieList({ movies, location, title }) {
  return (
    <>
      {!!title.length && <Title>{title}</Title>}
      <>
        {!!movies.length && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    </>
  );
}

import React, { useState } from 'react';
import { Title, MovieTitle, List, MovieLink } from './MovieList.styled';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieList({ movies, location, title }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  const handleMovieHover = async movieId => {
    try {
      const video = await theMovieDbAPI.fetchTrailer(movieId);
      if (video) {
        setTrailerUrl({ video, movieId });
      }
    } catch (error) {
      console.error(
        `Error fetching trailer for movie ${movieId}: ${error.message}`
      );
    }
  };

  const handleMovieLeave = () => {
    setTrailerUrl(null);
  };

  return (
    <>
      {!!title.length && <Title>{title}</Title>}
      {!!movies.length && (
        <List>
          {movies.map(movie => (
            <li key={movie.id} title="Click to read movie details">
              <MovieLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                onMouseEnter={() => handleMovieHover(movie.id)}
                onMouseLeave={handleMovieLeave}
              >
                {trailerUrl &&
                trailerUrl.movieId === movie.id &&
                trailerUrl.video ? (
                  <iframe src={trailerUrl.video} allow="autoplay; " />
                ) : (
                  movie.poster_path && (
                    <img
                      src={IMAGES_BASE_URL + movie.poster_path}
                      alt={movie.title}
                    />
                  )
                )}
                {!movie.poster_path && <MovieTitle>{movie.title}</MovieTitle>}
              </MovieLink>
            </li>
          ))}
        </List>
      )}
    </>
  );
}

// import { Title, List, MovieLink } from './MovieList.styled';
// const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

// export default function MovieList({ movies, location, title }) {
//   return (
//     <>
//       {!!title.length && <Title>{title}</Title>}
//       {!!movies.length && (
//         <List>
//           {movies.map(movie => (
//             <li key={movie.id}>
//               <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
//                 {movie.poster_path && (
//                   <img
//                     src={IMAGES_BASE_URL + movie.poster_path}
//                     alt={movie.title}
//                   />
//                 )}
//                 <div>{movie.title}</div>
//               </MovieLink>
//             </li>
//           ))}
//         </List>
//       )}
//     </>
//   );
// }

import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Row, Column, BackLink, Divider } from './MovieDetails.styled';

import * as theMovieDbAPI from '../../components/api/themoviedbApi';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export default function MovieDetailsView() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const movieData = await theMovieDbAPI.fetchDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('Error fetching images', error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>&#x2190; Go back</BackLink>
      {isLoading ? (
        <div>Loading the movie...</div>
      ) : (
        <>
          {movie && (
            <>
              <Row>
                {movie.poster_path && (
                  <img
                    src={IMAGES_BASE_URL + movie.poster_path}
                    alt={movie.title}
                  />
                )}
                <Column>
                  <h2>{movie.title}</h2>
                  {!!movie.vote_average && (
                    <p>Users score: {Math.round(movie.vote_average * 10)}%</p>
                  )}
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  {!!movie.genres.length && (
                    <>
                      <h3>Genres</h3>
                      <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
                    </>
                  )}
                </Column>
              </Row>
              <Column>
                <Divider />

                <h3>Additional information</h3>
                <ul>
                  <li>
                    <Link to="cast">Cast</Link>
                  </li>
                  <li>
                    <Link to="reviews">Reviews</Link>
                  </li>
                </ul>
                <Divider />
                <Suspense fallback={<div>Loading subpage...</div>}>
                  <Outlet />
                </Suspense>
              </Column>
            </>
          )}
        </>
      )}
    </>
  );
}

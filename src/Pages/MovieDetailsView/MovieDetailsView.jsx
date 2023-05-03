import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Row, Column, BackLink, Divider, List } from './MovieDetails.styled';

import * as theMovieDbAPI from '../../components/api/themoviedbApi';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      if (!movieId) setLoading(true);
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
      {' '}
      <BackLink to={backLinkHref}>&#x2190; Go back</BackLink>
      {movie && (
        <>
          <Row>
            <img src={IMAGES_BASE_URL + movie.poster_path} alt={movie.title} />
            <Column>
              <h2>{movie.title}</h2>
              <p>Users score: {Math.round(movie.vote_average * 100) / 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </Column>
          </Row>
          <Column>
            <Divider />

            <h3>Additional information</h3>
            <List>
              <li>
                <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </List>
            <Divider />
            <Outlet />
          </Column>
        </>
      )}
    </>
  );
}

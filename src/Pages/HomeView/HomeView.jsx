import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';

import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { results } = await theMovieDbAPI.fetchTrending();
        setMovies(results);
      } catch (error) {
        console.log('Error fetching images', error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <MovieList
        movies={movies}
        location={location}
        title={'Trending movies'}
      />
    </>
  );
}

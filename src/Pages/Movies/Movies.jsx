import { useSearchParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import SearchBox from 'components/SearchBox/SearchBox';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';
import MovieList from 'components/MovieList/MovieList';

export default function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    loadMovies(query);
  }, []);

  const onSubmit = ({ query }) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    loadMovies(query);
  };

  const loadMovies = async query => {
    if (!query.length) return;
    setLoading(true);
    try {
      const { results } = await theMovieDbAPI.searchReviews(query);
      setMovies(results);
    } catch (error) {
      console.log('Error fetching images', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBox onSubmit={onSubmit} initialValue={query} />
      <MovieList
        movies={movies}
        location={location}
        title={`Search results by word "${query}"`}
      />
    </div>
  );
}

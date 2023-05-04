import { getApiData } from './config';

export const fetchTrending = async () => {
  const { results, total_results } = await getApiData('trending/movie/day');
  return { results, total_results };
};

export const fetchDetails = async movie_id => {
  const { title, poster_path, vote_average, overview, genres } =
    await getApiData(`/movie/${movie_id}`);
  return { title, poster_path, vote_average, overview, genres };
};

export const fetchCast = async movie_id => {
  const { cast } = await getApiData(`/movie/${movie_id}/credits`);
  return { cast };
};

export const fetchReviews = async movie_id => {
  const { results } = await getApiData(`/movie/${movie_id}/reviews`);
  return { results };
};

export const searchReviews = async query => {
  const { results } = await getApiData(`/search/movie`, {
    params: {
      query,
    },
  });
  return { results };
};

export const fetchTrailer = async movie_id => {
  const { results } = await getApiData(`/movie/${movie_id}/videos`);
  const trailer = results.find(result => result.type === 'Trailer');
  if (trailer) {
    return `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0`;
  } else {
    throw new Error('No trailer found');
  }
};

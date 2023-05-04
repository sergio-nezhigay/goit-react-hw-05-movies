import { axiosConfig } from './config';

export const fetchTrending = async () => {
  try {
    const response = await axiosConfig.get('trending/movie/day');
    const { results, total_results } = response.data;
    return { results, total_results };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

export const fetchDetails = async movie_id => {
  try {
    const response = await axiosConfig.get(`/movie/${movie_id}`);
    const { title, poster_path, vote_average, overview, genres } =
      response.data;
    return { title, poster_path, vote_average, overview, genres };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

export const fetchCast = async movie_id => {
  try {
    const response = await axiosConfig.get(`/movie/${movie_id}/credits`);
    const { cast } = response.data;
    return { cast };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

export const fetchReviews = async movie_id => {
  try {
    const response = await axiosConfig.get(`/movie/${movie_id}/reviews`);
    const { results } = response.data;
    return { results };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

export const searchReviews = async query => {
  try {
    const response = await axiosConfig.get(`/search/movie`, {
      params: {
        query,
      },
    });
    const { results } = response.data;
    return { results };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};

export const fetchTrailer = async movie_id => {
  try {
    const response = await axiosConfig.get(`/movie/${movie_id}/videos`);
    const { results } = response.data;

    const trailer = results.find(result => result.type === 'Trailer');

    if (trailer) {
      const trailerUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0`;
      return trailerUrl;
    } else {
      throw new Error('No trailer found');
    }
  } catch (error) {
    throw new Error(`Error fetching trailer: ${error.message}`);
  }
};

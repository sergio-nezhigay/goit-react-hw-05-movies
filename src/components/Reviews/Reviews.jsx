import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';

import {
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w154';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!movieId) setLoading(true);
      try {
        const { results } = await theMovieDbAPI.fetchReviews(movieId);
        console.log('🚀 ~ file: Reviews.jsx:24 ~ results:', results);
        setReviews(results);
      } catch (error) {
        console.log('Error fetching cast', error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {reviews.length ? (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewText>{review.content}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}

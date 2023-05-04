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

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { results } = await theMovieDbAPI.fetchReviews(movieId);
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
      {isLoading ? (
        <div>Loading reviews...</div>
      ) : (
        <>
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
      )}
    </>
  );
}

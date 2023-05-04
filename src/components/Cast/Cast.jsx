import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';
import {
  CastList,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
  CastNoImage,
} from './Cast.styled';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w154';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { cast } = await theMovieDbAPI.fetchCast(movieId);
        setCast(cast);
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
        <div>Loading cast...</div>
      ) : (
        <>
          {cast.length ? (
            <CastList>
              {cast.map(actor => (
                <CastItem key={actor.id}>
                  {actor.profile_path ? (
                    <CastImage
                      src={IMAGES_BASE_URL + actor.profile_path}
                      alt={actor.name}
                    />
                  ) : (
                    <CastNoImage />
                  )}
                  <div>
                    <CastName>{actor.name}</CastName>
                    <CastCharacter>as {actor.character}</CastCharacter>
                  </div>
                </CastItem>
              ))}
            </CastList>
          ) : (
            <p>We don't have cast for this movie</p>
          )}
        </>
      )}
    </>
  );
}

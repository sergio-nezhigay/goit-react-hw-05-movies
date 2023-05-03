import { Route, Routes } from 'react-router-dom';

import Home from '../../Pages/HomeView/HomeView';
import SharedLayout from '../SharedLayout/SharedLayout';
import MovieDetailsView from 'Pages/MovieDetailsView/MovieDetailsView';
import Movies from 'Pages/Movies/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import SharedLayout from '../SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="products" element={<h1>products</h1>} />
        <Route path="products/:id" element={<h1>product details</h1>} />
      </Route>
    </Routes>
  );
};

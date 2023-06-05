import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './layout/Layout';
const Home = lazy(() => import('./home/Home'));
const Movies = lazy(() => import('./movies/Movies'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));

export const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

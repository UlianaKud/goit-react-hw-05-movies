import { useEffect, useState } from 'react';
import scss from './home.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const location = useLocation();

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg',
    },
  };
  const getTopMovies = () =>
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        const { results } = response;
        setTopMovies([...results]);
      })
      .catch(err => console.error(err));

  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <div className={scss.home}>
      <h1 className={scss.homeTitle}>Trending today</h1>
      <ul className={scss.homeList}>
        {topMovies?.map((result, index) => {
          return (
            <li className={scss.homeItem} key={`${result.id}_${index}`}>
              <NavLink to={`movies/${result.id}`} state={{ from: location }}>
                {result.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

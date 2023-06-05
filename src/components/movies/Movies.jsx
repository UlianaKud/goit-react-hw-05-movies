import { useEffect, useState } from 'react';
import scss from './movies.module.scss';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  let [searchParams, setSearchParams] = useSearchParams({});
  const queryParams = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (queryParams === '') return;
    getMovies();
  }, []);

  const getMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg',
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryParams}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        const { results } = response;
        if (!results.length) {
          setError(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          setMovies([]);
          return;
        }
        setMovies([...results]);
      })
      .catch(err => console.error(err));
  };

  const handleChange = evt => {
    const { value } = evt.target;
    value !== ''
      ? setSearchParams({ query: value.toLowerCase() })
      : setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMovies();
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <div className={scss.movies}>
      <form onSubmit={handleSubmit} className={scss.form}>
        <input
          className={scss.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchParams.query}
          onChange={handleChange}
        />
        <button tipe="submit" className={scss.button}>
          Search
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul className={scss.moviesList}>
        {movies.map((result, index) => {
          return (
            <li className={scss.moviesItem} key={`${result.id}_${index}`}>
              <NavLink to={`/movies/${result.id}`} state={{ from: location }}>
                {result.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;

import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import scss from './movieDetails.module.scss';

const MovieDetails = () => {
  const [movieName, setMovieName] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState('');
  const [score, setScore] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w400';
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg',
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        const {
          original_title,
          poster_path,
          overview,
          genres,
          release_date,
          vote_average,
        } = response;
        setMovieName(original_title);
        setPoster(poster_path);
        setOverview(overview);
        setGenres(genres);
        setReleaseDate(release_date.slice(0, 4));
        setScore(vote_average * 10);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={scss.movieWrapper}>
          <button className={scss.backButton}>
            <NavLink to={backLinkLocation.current}>Go Back</NavLink>
          </button>
          <div className={scss.movieInfo}>
            {poster && (
              <img
                className={scss.movieImage}
                src={`${baseImgUrl}${poster}`}
                alt="img"
              ></img>
            )}
            <div className={scss.movieDescription}>
              <h1 className={scss.movieCapture}>
                <span className={scss.movieName}>{movieName}</span>
                <span className={scss.movieDate}>{`(${releaseDate})`}</span>
              </h1>
              <p className={scss.movieScore}>{`User score: ${score}%`}</p>
              <div>
                <h2 className={scss.movieTitle}>Overview</h2>
                <p className={scss.movieOverview}>{overview}</p>
              </div>
              <div>
                <h2 className={scss.movieTitle}>Genres</h2>
                <p className={scss.movieGenres}>
                  {genres.map(genr => {
                    return (
                      <span className={scss.movieGenre} key={genr.id}>
                        {genr.name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className={scss.aditionalInf}>
            <h2 className={scss.aditionalTitle}>Aditional information</h2>
            <div className={scss.linksWrapper}>
              <div className={scss.movieLinks}>
                <NavLink
                  className={scss.movieLink}
                  to={`cast`}
                  state={{ from: location }}
                >
                  Cast
                </NavLink>
                <NavLink
                  className={scss.movieLink}
                  to={`reviews`}
                  state={{ from: location }}
                >
                  Reviews
                </NavLink>
              </div>
            </div>
          </div>
          <Suspense fallback={<div>...Loading</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import scss from './cast.module.scss';

const Cast = () => {
  const { movieId } = useParams();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getActors = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg',
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(response => {
          const { cast } = response;
          setActors([...cast]);
        })
        .catch(err => console.error(err));
    };
    getActors();
  }, []);

  return (
    <div>
      <ul className={scss.list}>
        {actors.map((actor, index) => {
          return (
            <li className={scss.item} key={`${actor.id}_${index}`}>
              {actor.profile_path && (
                <img
                  className={scss.img}
                  src={`${baseImgUrl}${actor.profile_path}`}
                  alt="img"
                ></img>
              )}
              <p className={scss.name}>{actor.name}</p>
              <p className={scss.character}>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;

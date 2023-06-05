import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import scss from './reviews.module.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const getReviews = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg',
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(response => {
          const { results } = response;
          if (!results.length) {
            setMessage(`We don't have any reviews for this movie.`);
            return;
          }
          setReviews([...results]);
        })
        .catch(err => console.error(err));
    };
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {message && <p className={scss.message}>{message}</p>}
      <ul className={scss.list}>
        {reviews.map((review, index) => {
          return (
            <li className={scss.item} key={`${review.id}_${index}`}>
              <p className={scss.autor}>Author:{review.author}</p>
              <p className={scss.review}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;

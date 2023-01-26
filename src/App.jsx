import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';

const App = () => {

  const [films, setFilms] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/76341?api_key=ac202904369986b675f1700a286c33f6')
      .then(response => response.json())
      .then(json => {
        setFilms(json)
        console.log(json)
      })
  }, [])

  return (
    <>
      <h1>Favourite Movies</h1>
      <div>{films.title}</div>
      <img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt={films.id} />
      <p>{films.overview}</p>
    </>
  )
}

export default App;

// Зображення: base_url/file_size/file_path
// base_url : 'https://image.tmdb.org/'
// file_size : 't/p/w500'
// file_path: 

// https://api.themoviedb.org/3/movie/76341?api_key=ac202904369986b675f1700a286c33f6

// https://api.themoviedb.org/3/movie/550?api_key=ac202904369986b675f1700a286c33f6

// https://www.themoviedb.org/3/movie/76341?api_key=ac202904369986b675f1700a286c33f6
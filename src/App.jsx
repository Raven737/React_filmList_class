import { useState, useEffect } from 'react';

const App = () => {

  const [films, setFilms] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/314?api_key=ac202904369986b675f1700a286c33f6')
      .then(response => response.json())
      .then(json => {
        setFilms(json)
        console.log(json)
      })
  }, [])

  return (
    <div className="film-wrap">
      <h1 className="headline">Favourite Movies</h1>
      <h2>{films.title}</h2>
      <img className="film-img" src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt={films.id} />
      <p>{films.overview}</p>
    </div>
  )
}

export default App;
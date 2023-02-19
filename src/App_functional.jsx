import { useState, useEffect } from "react";

const App_function = () => {
    const [films, setFilms] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        )
            .then((response) => response.json())
            .then((json) => {
                setFilms(json);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="film-wrap">
            <h1 className="headline">Favourite Movies</h1>
            {films.results.map((film) => {
                return (
                    <>
                        <h2 key={film.id}>{film.title}</h2>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                            alt={film.title}
                        />
                        <p>{film.overview}</p>
                        <hr />
                    </>
                );
            })}
        </div>
    );
};

export default App_function;

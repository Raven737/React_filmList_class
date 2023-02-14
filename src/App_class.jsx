import { Component } from 'react';

class App_class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(response => response.json())
            .then(json => {
                this.setState({ films: json, loading: false });
            })
            .catch(error => {
                this.setState({ error: error, loading: false });
            });
    }

    render() {
        const { films, error, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div className="film-wrap">
                <h1 className="headline">Favourite Movies</h1>
                {
                    films.results.map((film) => {
                        return (
                            <>
                                <h2 key={film.id}>{film.title}</h2>
                                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
                                <p>{film.overview}</p>
                                <hr />
                            </>
                        );
                    })
                }
            </div>
        );
    }
}

export default App_class;
import { Component } from 'react';
import RateSwitch from './RateSwitch';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

class App_class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            error: null,
            isLoading: true
        };
    }
    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                this.setState({ films: json, isLoading: false });
            })
            .catch(error => {
                this.setState({ error: error, isLoading: false });
            });
    }

    render() {
        const { films, error, isLoading } = this.state;

        return (
            <div className="film-wrap">
                <h1 className="headline">Favourite Movies</h1>
                {error ? <div>Error: {error.message}</div>
                    : (!isLoading ?
                        films.results.map((film) => {
                            return (
                                <div key={film.id}>
                                    <h2 >{film.title}</h2>
                                    <RateSwitch rate={film.popularity} />
                                    <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
                                    <p>{film.overview}</p>
                                    <hr />
                                </div>
                            );
                        })
                        : <div>Loading...</div>)}
            </div>
        );
    }
}

export default App_class;
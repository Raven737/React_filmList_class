import { Component } from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";

class App_class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            error: null,
            isLoading: true,
            page: 1,
        };
    }

    MAX_PAGE = 500;

    pageStep = (step) => {
        const newPage = Number(this.state.page + step);
        if (newPage < 1 || newPage > this.MAX_PAGE) return null;
        this.setState({ page: newPage });
    };

    setPage = (num) => {
        if (!num) return null;
        this.setState({ page: Number(num) });
    };

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ films: json, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=ac202904369986b675f1700a286c33f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({ films: json, isLoading: false });
                })
                .catch((error) => {
                    this.setState({ error: error, isLoading: false });
                });
        }
    }

    render() {
        return (
            <div className="film-wrap">
                <h1 className="headline">Favourite Movies</h1>
                <h2 className="headline">Page № {this.state.page}</h2>
                <Pagination
                    page={this.state.page}
                    max_page={this.MAX_PAGE}
                    pageStep={this.pageStep}
                    setPage={this.setPage}
                />
                {this.state.error ? (
                    <div>Error: {this.state.error.message}</div>
                ) : !this.state.isLoading ? (
                    this.state.films.results.map((film) => {
                        return (
                            <div key={film.id}>
                                <h2>{film.title}</h2>
                                <RateSwitch rating={film.popularity} />
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                                    alt={film.title}
                                />
                                <p>{film.overview}</p>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
}

export default App_class;

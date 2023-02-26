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

    // pageDown = () => {
    //     this.setState({ page: this.state.page - 1 });
    // };
    // pageUp = () => {
    //     this.setState({ page: this.state.page + 1 });
    // };
    // pageNumber1 = () => {
    //     this.setState({ page: 1 });
    // };
    // pageNumber2 = () => {
    //     this.setState({ page: 2 });
    // };
    // pageNumber3 = () => {
    //     this.setState({ page: 3 });
    // };
    // lastPage = () => {
    //     this.setState({ page: this.films?.total_pages });
    // };

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
        // const { films, error, isLoading, page } = this.state;

        const pageDown = () => {
            this.setState({ page: this.state.page - 1 });
        };
        const pageUp = () => {
            this.setState({ page: this.state.page + 1 });
        };
        const pageNumber1 = () => {
            this.setState({ page: 1 });
        };
        const pageNumber2 = () => {
            this.setState({ page: 2 });
        };
        const pageNumber3 = () => {
            this.setState({ page: 3 });
        };
        const selectNumber = () => {
            this.setState({ page: document.getElementById("enterBtn").value });
        };
        const lastPage = () => {
            this.setState({ page: this.state.films?.total_pages });
        };
        return (
            <div className="film-wrap">
                <h1 className="headline">Favourite Movies</h1>
                <h2 className="headline">page № {this.state.page}</h2>
                <Pagination
                    films={this.state.films}
                    page={this.state.page}
                    pageDown={pageDown}
                    pageUp={pageUp}
                    pageNumber1={pageNumber1}
                    pageNumber2={pageNumber2}
                    pageNumber3={pageNumber3}
                    selectNumber={selectNumber}
                    lastPage={lastPage}
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

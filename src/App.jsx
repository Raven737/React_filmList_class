import React from "react";
import Theme from "./Theme";
import Pagination from "./Pagination";
import RateSwitch from "./RateSwitch";
import PopUp from "./PopUp";

export const ThemeContext = React.createContext();

class App_class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            page: 1,
            isLoading: true,
            error: null,
            lightTheme: true,
        };
    }

    MAX_PAGE = 500;

    toggle = () => {
        this.setState({ lightTheme: !this.state.lightTheme });
    };

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
        let currentTheme = this.state.lightTheme ? "light-theme" : "dark-theme";
        return (
            <ThemeContext.Provider value={`${currentTheme}`}>
                <div className={`container ${currentTheme}`}>
                    <div className="filmHeader">
                        <h1 className="headline">Favourite Movies</h1>
                        <Theme
                            toggle={this.toggle}
                            lightTheme={this.state.lightTheme}
                        />
                        <h2 className="pageNumber">Page № {this.state.page}</h2>
                        <Pagination
                            page={this.state.page}
                            max_page={this.MAX_PAGE}
                            pageStep={this.pageStep}
                            setPage={this.setPage}
                        />
                    </div>
                    {this.state.error ? (
                        <div>Error: {this.state.error.message}</div>
                    ) : !this.state.isLoading ? (
                        this.state.films.results.map((film) => {
                            return (
                                <div className="filmWrap" key={film.id}>
                                    <hr />
                                    <h2 className="filmTitle">{film.title}</h2>
                                    <PopUp release={film.release_date} />
                                    {/* <p className="filmReleaseDate">
                                        Release date:&nbsp;
                                        {film.release_date}
                                    </p> */}
                                    <RateSwitch rating={film.popularity} />
                                    <div className="filmBlock">
                                        <img
                                            className="filmImg"
                                            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                                            alt={film.title}
                                        />
                                        <p className="filmOverview">
                                            {film.overview}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App_class;

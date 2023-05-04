import { Component } from "react";

class Title extends Component {
    render() {
        return (
            <div
                className={`filmHeader ${
                    this.props.lightTheme ? "light-theme" : "dark-theme"
                }`}
            >
                <h1 className="headline">Favourite Movies</h1>
                <h2 className="pageNumber">Page № {this.props.page}</h2>
            </div>
        );
    }
}

export default Title;

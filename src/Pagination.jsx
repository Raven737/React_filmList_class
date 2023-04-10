import { Component } from "react";
import ThemeContext from "./Context";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        };
    }

    static contextType = ThemeContext;

    render() {
        console.log(this.context);
        const { pageStep, max_page, setPage } = this.props;

        const handleInputValue = (event) => {
            let newInputValue = event.target.value;
            if (newInputValue < 1) newInputValue = 1;
            if (newInputValue > max_page) newInputValue = max_page;
            this.setState({ inputValue: newInputValue });
        };

        const handleSetPage = () => {
            setPage(this.state.inputValue);
            this.setState({ inputValue: "" });
        };

        return (
            <div className="pagination">
                <div>
                    <button
                        className={this.context ? "light-theme" : "dark-theme"}
                        onClick={() => pageStep(-10)}
                    >
                        - 10
                    </button>
                    <button
                        className={this.context ? "light-theme" : "dark-theme"}
                        onClick={() => pageStep(-1)}
                    >
                        - 1
                    </button>
                    <div className="pagination__form">
                        <input
                            className={
                                this.context ? "light-theme" : "dark-theme"
                            }
                            type="number"
                            placeholder="enter page number"
                            value={this.state.inputValue}
                            onChange={handleInputValue}
                        />
                        <button
                            className={
                                this.context ? "light-theme" : "dark-theme"
                            }
                            onClick={handleSetPage}
                        >
                            Search
                        </button>
                    </div>
                    <button
                        className={this.context ? "light-theme" : "dark-theme"}
                        onClick={() => pageStep(1)}
                    >
                        + 1
                    </button>
                    <button
                        className={this.context ? "light-theme" : "dark-theme"}
                        onClick={() => pageStep(10)}
                    >
                        + 10
                    </button>
                </div>
            </div>
        );
    }
}

export default Pagination;

import { Component } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
        };
    }

    render() {
        const { pageStep, max_page, setPage } = this.props;

        const handleInputValue = (event) => {
            let newInputValue = event.target.value;
            if (newInputValue < 1) newInputValue = 1;
            if (newInputValue > max_page) newInputValue = max_page;
            this.setState({ inputValue: newInputValue });
        };

        const handleSetPage = (event) => {
            setPage(this.state.inputValue);
            this.setState({ inputValue: "" });
        };

        return (
            <div className="pagination">
                <div>
                    <button className="prev-btn" onClick={() => pageStep(-10)}>
                        - 10
                    </button>
                    <button className="prev-btn" onClick={() => pageStep(-1)}>
                        - 1
                    </button>
                    <div className="pagination__form">
                        <input
                            type="number"
                            placeholder="enter page number"
                            value={this.state.inputValue}
                            onChange={handleInputValue}
                        />
                        <button onClick={handleSetPage}>Search</button>
                    </div>
                    <button className="next-btn" onClick={() => pageStep(1)}>
                        + 1
                    </button>
                    <button className="next-btn" onClick={() => pageStep(10)}>
                        + 10
                    </button>
                </div>
            </div>
        );
    }
}

export default Pagination;

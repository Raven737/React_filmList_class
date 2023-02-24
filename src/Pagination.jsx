import { Component } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const prev = () => {
            if (this.props.page === 1) return null;
            this.props.pageDown();
        };

        const next = () => {
            if (this.props.page === this.props.films?.total_pages) return null;
            this.props.pageUp();
        };

        return (
            <div className="pagination">
                <button onClick={prev}>prev</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <input type="number" placeholder="enter page number" />
                <button>{this.props.films?.total_pages}</button>
                <button onClick={next}>next</button>
            </div>
        );
    }
}

export default Pagination;

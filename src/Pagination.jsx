import { Component, createRef } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    myRef = createRef();
    maxPage = 500;

    prevTen = () => {
        if (this.props.page - 10 < 0) return this.props.pageOne();
        this.props.pageDownTen();
    };
    prev = () => {
        if (this.props.page === 1) return null;
        this.props.pageDown();
    };
    lastPage = () => {
        this.props.endPage();
    };
    next = () => {
        if (this.props.page === this.maxPage) return null;
        this.props.pageUp();
    };
    nextTen = () => {
        if (this.props.page + 10 > this.maxPage) return this.props.endPage();
        this.props.pageUpTen();
    };
    search = () => {
        if (
            Number(this.myRef.current.value) === 0 ||
            Number(this.myRef.current.value) + this.props.page <= 0 ||
            Number(this.myRef.current.value) > this.maxPage
        )
            return null;

        this.props.enterNumber(Number(this.myRef.current.value));
    };

    render() {
        return (
            <div className="pagination">
                <div>
                    <button className="prev-btn" onClick={this.prevTen}>
                        - 10
                    </button>
                    <button className="prev-btn" onClick={this.prev}>
                        - 1
                    </button>
                    <button className="btn" onClick={this.prev}>
                        {this.props.page !== 1 ? (
                            this.props.page - 1
                        ) : (
                            <span>---</span>
                        )}
                    </button>
                    <button className="current-btn btn">
                        {this.props.page}
                    </button>
                    <button className="btn" onClick={this.next}>
                        {this.props.page + 1 <= this.maxPage ? (
                            this.props.page + 1
                        ) : (
                            <span>---</span>
                        )}
                    </button>
                    <button className="btn">. . .</button>
                    <button className="btn" onClick={this.lastPage}>
                        {this.maxPage}
                    </button>
                    <button className="next-btn" onClick={this.next}>
                        + 1
                    </button>
                    <button className="next-btn" onClick={this.nextTen}>
                        + 10
                    </button>
                </div>
                <div>
                    <input
                        type="number"
                        ref={this.myRef}
                        placeholder="enter page number"
                    />
                    <button onClick={this.search}>Search</button>
                </div>
            </div>
        );
    }
}

export default Pagination;

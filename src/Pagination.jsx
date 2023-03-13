import { Component } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    maxPage = 500;

    prevTen = () => {
        if (this.props.page - 10 < 0) return this.props.pageOne();
        this.props.pageDownTen();
    };
    prev = () => {
        if (this.props.page === 1) return null;
        this.props.pageDown();
    };
    pageNum1 = () => {
        if (this.props.page === 1) return null;
        this.props.pageNumber1();
    };
    pageNum2 = () => {
        this.props.pageNumber2();
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

    render() {
        return (
            <div className="pagination">
                <button className="prev-btn" onClick={this.prevTen}>
                    - 10
                </button>
                <button className="prev-btn" onClick={this.prev}>
                    - 1
                </button>
                <button className="btn" onClick={this.prev}>
                    {this.props.page === 1 ? (
                        <span>---</span>
                    ) : (
                        this.props.page - 1
                    )}
                </button>
                <button className="current-btn btn">{this.props.page}</button>
                <button className="btn" onClick={this.pageNum2}>
                    {this.props.page <= this.maxPage &&
                    this.props.page + 1 <= this.maxPage ? (
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
        );
    }
}

export default Pagination;

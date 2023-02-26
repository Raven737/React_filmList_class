import { Component } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    prev = () => {
        if (this.props.page === 1) return null;
        this.props.pageDown();
    };
    // next = () => {
    //     if (this.props.page === this.props.films?.total_pages) return null;
    //     this.props.pageUp();
    // };
    // pageNumber1 = () => {
    //     this.props.pageNumber1();
    // };
    // pageNumber2 = () => {
    //     this.props.pageNumber2();
    // };
    // pageNumber3 = () => {
    //     this.props.pageNumber3();
    // };
    // lastPage = () => {
    //     this.props.lastPage();
    // };

    render() {
        // const {
        //     pageDown,
        //     pageUp,
        //     pageNumber1,
        //     pageNumber2,
        //     pageNumber3,
        //     selectNumber,
        //     lastPage,
        // } = this.props;

        const prev = () => {
            if (this.props.page === 1) return null;
            this.props.pageDown();
        };
        const next = () => {
            if (this.props.page === this.props.films?.total_pages) return null;
            this.props.pageUp();
        };
        const pageNum1 = () => {
            this.props.pageNumber1();
        };
        const pageNum2 = () => {
            this.props.pageNumber2();
        };
        const pageNum3 = () => {
            this.props.pageNumber3();
        };
        const selectNum = () => {
            this.props.selectNumber();
        };
        const lstPage = () => {
            this.props.lastPage();
        };

        return (
            <div className="pagination">
                <button onClick={prev}>prev</button>
                <button onClick={pageNum1}>1</button>
                <button onClick={pageNum2}>2</button>
                <button onClick={pageNum3}>3</button>
                <input
                    id="enterBtn"
                    type="number"
                    placeholder="enter page number"
                />
                <button onClick={selectNum}>Enter number</button>
                <button onClick={lstPage}>
                    {this.props.films?.total_pages}
                </button>
                <button onClick={next}>next</button>
            </div>
        );
    }
}

export default Pagination;

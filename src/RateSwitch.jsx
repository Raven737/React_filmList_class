import { Component } from "react";
import { ThemeContext } from "./App";

class RateSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRate: false,
        };
    }
    toggleRate = () => this.setState({ isShowRate: !this.state.isShowRate });

    render() {
        return (
            <div>
                {/* <ThemeContext.Consumer> */}
                    {/* {(value) => <h1>{value}</h1>} */}
                    <button onClick={this.toggleRate}>
                        {this.state.isShowRate ? "Hide Rate" : "Show Rate"}
                    </button>
                    {this.state.isShowRate && (
                        <span className="rating">{this.props.rating}</span>
                    )}
                {/* </ThemeContext.Consumer> */}
            </div>
        );
    }
}

export default RateSwitch;

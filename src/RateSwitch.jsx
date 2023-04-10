import { Component } from "react";
import ThemeContext from "./Context";

class RateSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRate: false,
        };
    }

    static contextType = ThemeContext;

    toggleRate = () => this.setState({ isShowRate: !this.state.isShowRate });

    render() {
        return (
            <div>
                <button
                    className={this.context ? "light-theme" : "dark-theme"}
                    onClick={this.toggleRate}
                >
                    {this.state.isShowRate ? "Hide Rate" : "Show Rate"}
                </button>
                {this.state.isShowRate && (
                    <span className="rating">{this.props.rating}</span>
                )}
            </div>
        );
    }
}

export default RateSwitch;

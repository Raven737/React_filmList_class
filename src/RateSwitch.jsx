import { Component } from "react";

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
                <button onClick={this.toggleRate}>
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

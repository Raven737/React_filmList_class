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
                    <h3 className="rating">{this.props.rating}</h3>
                )}
            </div>
        );
    }
}

export default RateSwitch;

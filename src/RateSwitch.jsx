import { Component } from "react";

class RateSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRate: false,
        };
    }

    render() {
        const toggleRate = () => {
            this.setState({ isShowRate: !this.state.isShowRate });
        };

        return (
            <div>
                {this.state.isShowRate && (
                    <a href="#">
                        <h3 className="rating">{this.props.rating}</h3>
                    </a>
                )}
                <a href="#" onClick={toggleRate}>
                    {this.state.isShowRate ? (
                        <button>Hide Rate</button>
                    ) : (
                        <button>Show Rate</button>
                    )}
                </a>
            </div>
        );
    }
}

export default RateSwitch;

import { Component } from "react";

class PopUp extends Component {
    render() {
        return (
            <div className="filmReleaseDate">
                Release date: {this.props.release}
            </div>
        );
    }
}

export default PopUp;

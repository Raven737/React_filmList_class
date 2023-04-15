import { Component } from "react";
import ThemeContext from "./Context";

class PopUp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }
    render() {
        return (
            <div className="filmReleaseDate">
                Release date: {this.props.release}
            </div>
        );
    }
}

export default PopUp;

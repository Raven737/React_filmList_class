import { Component } from "react";

class PopUp extends Component {
    render() {
        return (
            <div className="overlay">
                <div className="pop-up">
                    <button
                        className="close"
                        onClick={() => this.props.togglePopUp()}
                    >
                        &#10006;
                    </button>
                    <p>Release date: {this.props.date}</p>
                </div>
            </div>
        );
    }
}

export default PopUp;

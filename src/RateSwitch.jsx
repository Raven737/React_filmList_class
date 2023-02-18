import { Component } from 'react';

class RateSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRate: false
        }
    }
    render() {
        const toggleRate = () => {
            this.setState({ isShowRate: !this.state.isShowRate });
        }
        return (
            <div>
                <a href="#" onClick={toggleRate}>{this.state.isShowRate ? 'Show Rate' : 'Hide me'}</a>
                {this.state.isShowRate && <a href="#">{this.props.rate}</a>}
            </div>
        )
    }
}

export default RateSwitch;
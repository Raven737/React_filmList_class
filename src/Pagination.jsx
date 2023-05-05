import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        };
    }

    render() {
        const { max_page, pageStep, setPage } = this.props;

        const handleInputValue = (event) => {
            let newInputValue = event.target.value;
            if (newInputValue < 1) newInputValue = 1;
            if (newInputValue > max_page) newInputValue = max_page;
            this.setState({ inputValue: newInputValue });
        };

        const handleSetPage = () => {
            setPage(this.state.inputValue);
            this.setState({ inputValue: "" });
        };

        return (
            <div
                className={`d-flex justify-content-center ${
                    this.props.lightTheme ? "light-theme" : "dark-theme"
                }`}
            >
                <div className="d-sm-flex">
                    <Button
                        className="me-1 mb-1"
                        variant={
                            this.props.lightTheme ? "primary" : "secondary"
                        }
                        onClick={() => pageStep(-10)}
                    >
                        - 10
                    </Button>
                    <Button
                        className="me-1 mb-1"
                        variant={
                            this.props.lightTheme ? "warning" : "secondary"
                        }
                        onClick={() => pageStep(-1)}
                    >
                        - 1
                    </Button>
                    <Form className="d-flex">
                        <FormControl
                            style={{
                                background: this.props.lightTheme
                                    ? "lightblue"
                                    : "grey",
                            }}
                            className="me-1 mb-1"
                            type="number"
                            placeholder="Введіть номер стор."
                            value={this.state.inputValue}
                            onChange={handleInputValue}
                        />
                        <Button
                            className="me-1 mb-1"
                            variant={
                                this.props.lightTheme ? "danger" : "secondary"
                            }
                            onClick={handleSetPage}
                        >
                            Пошук
                        </Button>
                    </Form>
                    <Button
                        className="me-1 mb-1"
                        variant={
                            this.props.lightTheme ? "warning" : "secondary"
                        }
                        onClick={() => pageStep(1)}
                    >
                        + 1
                    </Button>
                    <Button
                        className="mb-1"
                        variant={
                            this.props.lightTheme ? "primary" : "secondary"
                        }
                        onClick={() => pageStep(10)}
                    >
                        + 10
                    </Button>
                </div>
            </div>
        );
    }
}

export default Pagination;

import React, {Component} from "react";
import {render} from "react-dom";
import Form from "./Form.jsx";
import FormInput from "./FormInput.jsx";
import "../a.scss";
class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                13
                <Form>
                    <FormInput />
                    <FormInput />
                </Form>
            </div>
        )
    }
}
const rootElement = document.getElementById('container');
render(<App />, rootElement);

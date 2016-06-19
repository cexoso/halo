import React,{Component} from "react";
export class FormInput1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (<div>
            123
        </div>)
    }
}

export default class FormInput extends FormInput1 {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (<div>
            123
        </div>)
    }
}

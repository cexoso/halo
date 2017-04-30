import * as React from "react";
import {Component} from "react";
function log(target, key: string, value: any) {
    console.log(value)
    return function() {
        console.log(22)
        return 2
    }
}
export default class App extends Component {
    initTime = new Date()
    @log
    click() {
        console.log(1)
        // console.log(this.initTime)
    }
    render() {
        return (<div onClick={this.click}>
        13
    </div>)
    }
}


import * as React from "react";
import { Component } from "react";
import { fromEvent } from "rxjs/observable/fromEvent";

console.log(fromEvent)
export default class App extends Component<any, any> {
    initTime = new Date()
    click() {
        // console.log(this.initTime)
    }
    render() {
        return (<div>
            123
        </div>)
    }
}


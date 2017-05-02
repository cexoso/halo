import * as React from "react";
import { WheelEventHandler } from "react"
// import {} from "rxjs";
import { Component } from "react";
import { times, noop } from "lodash";
import { defaultProps } from "recompose";
import withScrollControl from "../js/withScrollControl"
interface propsTypes {
    onWheel: WheelEventHandler<HTMLDivElement>
}
function getDefaultProps(): propsTypes {
    return {
        onWheel: (e)=>{
            console.log(e.clientY)
        }
    }
}
@withScrollControl
@defaultProps(getDefaultProps())
export default class List extends Component<propsTypes, any> {
    render() {
        const { onWheel } = this.props;
        return <div onWheel={onWheel}>
            {times(100, (i) => <div key={i}>div {i}</div>)}
        </div>
    }
}
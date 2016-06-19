import React,{Component} from "react";
export default class Form extends Component {
    constructor(props) {
        super(props);
        const {children} = props;
        console.log(children)
        Array.prototype.map.call(children,(child)=>{
            console.log(child);
        });
    }
    render() {
        return (<div>
            
        </div>)
    }
}

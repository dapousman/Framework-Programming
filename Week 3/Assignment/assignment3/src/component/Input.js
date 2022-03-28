import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
    render() {
        return (
            <input className="input" placeholder={this.props.plchdr}/>
        );
    }
}

export default Input;
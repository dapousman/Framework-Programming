import React, { Component } from "react";
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button type="button" className={this.props.buttonStyle}>
                {this.props.textdisplay}
            </button>
        )
    }
}

export default Button;
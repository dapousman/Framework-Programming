import React, { Component } from "react";
import './Checkbox.css';

class Checkbox extends Component {
    render(){
    return (
        <div>
            <input type="checkbox"/>
            <label>Remember me</label>        
        </div>
    );
    }
}

export default Checkbox;
import React, { Component } from "react";
import Input from "../component/Input.js";
import Checkbox from "../component/Checkbox.js";
import Button from "../component/Button.js";
import "./Login.css";


class Login extends Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                <h1>Login Form</h1>
                <h3 className="title">Assignment Week 3</h3>
                <Input plchdr="Input Username"></Input>
                <br></br>
                <Input plchdr="Input Password"></Input>
                <br></br>
                <Checkbox></Checkbox>
                <br></br>
                <Button textdisplay="Login" buttonStyle="Login"></Button>
                <br></br>
                <Button textdisplay="Cancel" buttonStyle="Cancel"></Button>
                </div>
            </div>
        );
    }
}

export default Login;


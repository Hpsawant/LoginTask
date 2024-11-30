import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import LocalStorage from "./LocalStorage";
import "./../styles/Register.css";

class Register extends Component {
    state = { username: "", password: "", isRegistered: false };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleRegister = (event) => {
        event.preventDefault();
        const users = LocalStorage.getData("users") || [];
        users.push({ username: this.state.username, password: this.state.password });
        LocalStorage.saveData("users", users);
        alert("Registration successful!");
        this.setState({ isRegistered: true });
    };

    render() {
        if (this.state.isRegistered) {
            return <Navigate to="/" />;
        }

        return (
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={this.handleRegister}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;

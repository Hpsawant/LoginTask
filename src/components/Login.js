import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import LocalStorage from "./LocalStorage";
import "./../styles/Login.css";

class Login extends Component {
    state = { username: "", password: "", isLoggedIn: false };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = (event) => {
        event.preventDefault();
        const users = LocalStorage.getData("users") || [];
        const user = users.find(
            (u) =>
                u.username === this.state.username &&
                u.password === this.state.password
        );

        if (user) {
            LocalStorage.saveData("currentUser", user);
            this.setState({ isLoggedIn: true });
        } else {
            alert("Invalid username or password!");
        }
    };

    render() {
        if (this.state.isLoggedIn) {
            return <Navigate to="/dashboard" />;
        }

        return (
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={this.handleLogin}>
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
                    <button type="submit">Login</button>
                    <Link to="/register" className="registration-link">
                    Don't have an account? Register here
                </Link>
                </form>
            </div>
        );
    }
}

export default Login;

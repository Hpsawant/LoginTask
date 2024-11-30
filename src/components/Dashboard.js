import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import LocalStorage from "./LocalStorage";
import "./../styles/Dashboard.css";

class Dashboard extends Component {
    state = { currentUser: null, isLoggedOut: false };

    componentDidMount() {
        const currentUser = LocalStorage.getData("currentUser");
        if (!currentUser) {
            this.setState({ isLoggedOut: true });
        } else {
            this.setState({ currentUser });
        }
    }

    handleLogout = () => {
        LocalStorage.removeData("currentUser");
        this.setState({ isLoggedOut: true });
    };

    render() {
        if (this.state.isLoggedOut) {
            return <Navigate to="/" />;
        }

        return (
            <div className="dashboard-container">
                <h2>Welcome to the Dashboard</h2>
                {this.state.currentUser && (
                    <p>Hello, {this.state.currentUser.username}!</p>
                )}
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Dashboard;

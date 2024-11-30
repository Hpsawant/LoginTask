import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import LocalStorage from "./LocalStorage";
import "./../styles/Profile.css";

class Profile extends Component {
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
            <div className="profile-container">
                <h2>Your Profile</h2>
                {this.state.currentUser ? (
                    <>
                        <p><strong>Username:</strong> {this.state.currentUser.username}</p>
                        <p><strong>Password:</strong> {this.state.currentUser.password}</p>
                    </>
                ) : (
                    <p>Loading profile details...</p>
                )}
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

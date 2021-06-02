import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar">
                    <span className="logo">
                        <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" height="50px" width="50px" alt="conference" />
                    </span>
                    <Link to="/">Home</Link>
                    <Link to="/committee" >Committee</Link>
                    <Link to="/papers">Call for Papers</Link>
                    <Link to="/dates">Important Dates</Link>
                    <Link to="/workshops">Workshops</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar_section">
            <Link className="navbar-brand" to="/">
                <img src="assets/logo.svg" alt="logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse justify-content-space-between"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Signup">
                            Signup <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/support">
                            Support
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
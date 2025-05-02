import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate(); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
        
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar_section px-3">

            <Link className="navbar-brand" to="/">
                <img src="assets/logo.svg" alt="logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto ">
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
                <form className="form-inline my-2 my-lg-0"
                    onSubmit={handleSearchSubmit}
                >
                    
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}  
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
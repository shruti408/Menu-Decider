import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "./context/usercontext"

export default function Navbar() {
    const { user, logout } = useContext(UserContext);

    async function handleLogout(e) {
        e.preventDefault();
        await logout();
        //  navigate("/");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link mb-1 active">
                            <img src="../menu.png" alt="logo" style={{ width: "1.3rem", height: "1.1rem" }} />
                        </Link>
                    </li>
                    <li className="nav-item fs-5">
                        <Link to="/menus" className="nav-link active">Menus</Link>
                    </li>
                </ul>
                <div className="container m-0 d-flex justify-content-end">
                    <ul className="navbar-nav ">
                        {user ? (
                            <>
                                <li className="nav-item mt-1">
                                    <div className="nav-link active">{user.email}</div>
                                </li>
                                <li className="nav-item mt-1">
                                    <button className="btn btn-success nav-link active" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (

                            <>
                                <li className="nav-item me-2 mt-1">
                                    <Link to="/register" className="btn btn-danger nav-link active">Register</Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link to="/login" className="btn btn-primary nav-link active">Login</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </nav>
        </>
    )
}

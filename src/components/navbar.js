import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../context/user/usercontext"

export default function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    async function handleLogout(e) {
        e.preventDefault();
        await logout();
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to="/" className="nav-link ms-1">
                    <img src="../menu.png" className="mb-1" alt="logo" style={{ width: "1.3rem", height: "1.1rem" }} />
                </Link>
                <ul className="navbar-nav ms-1">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">selector</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link active">list</Link>
                    </li>
                </ul>
                <div className="container d-flex justify-content-end mb-2">
                    {user ? (
                        <>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle text-secondary" data-bs-toggle="dropdown" style={{width: "3rem", height: "1.8rem"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </button>

                                <ul class="dropdown-menu bg-secondary">
                                    <li><a class="dropdown-item text-light" href="#">{user.email}</a></li>
                                    <li className="bg-success">
                                        <button className="dropdown-item btn btn-success text-light" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (<></>)}
                </div>
            </nav>
        </>
    )
}

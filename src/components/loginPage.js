import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./context/usercontext";
import Navbar from "./navbar";

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        await login(email, password)
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <Navbar />
            <div className="container my-5 text-center" style={{ width: "20rem" }}>
                <h3>Hi, Login to continue..</h3>
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        ></label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            value={password}
                        />
                    </div>
                    {/* <div><Link to="/register" className="mt-2 text-primary">Forgot password?</Link></div> */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary my-2"
                            style={{ width: "13rem" }}
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* <hr /> */}
                <div className="text-center text-light mt-4">
                    Don't have an account yet?
                    <div className=" container" style={{ width: "14rem" }}>
                        <Link
                            to="/register"
                            className="p-2 btn btn-danger nav-link active my-2"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;

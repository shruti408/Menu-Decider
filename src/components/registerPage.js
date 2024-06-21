import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./context/usercontext";

function RegisterPage() {
    const navigate = useNavigate();
    const { register } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
        await register(email, password);
        navigate('/');
        window.location.reload();

    }

    return (
        <>
            <div className="container my-5 text-center text-light" style={{ width: "21rem" }}>
                <h3>Hi, register to continue..</h3>
                <form
                    onSubmit={handleRegister}
                >
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="2"
                            aria-describedby="emailHelp"
                            placeholder="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                        </label>
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
                    <div className="text-center">
                        <button type="submit" className="btn btn-danger my-2" style={{ width: "13rem" }}>
                            Register
                        </button>
                    </div>

                </form>
                            <div className="text-center text-light mt-4">
                    Already have an account?
                    <div className=" container" style={{ width: "14rem" }}>
                        <Link to="/" className="p-2 btn btn-primary nav-link active my-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;


// validation
// after success return to app page
// bring user info  to frontend menus menu
// add delete read 
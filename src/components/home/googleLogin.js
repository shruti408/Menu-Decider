import { useContext } from "react";
import UserContext from "../../context/user/usercontext";

export default function GoogleLogin() {
    const { login } = useContext(UserContext);
    async function handleClick() {
        await login();
    }
    return (
        <>
            <div className="container text-center position-absolute bottom-50">
                <button className="btn btn-success p-3 fs-4" onClick={handleClick}>
                    Sign In with Google
                </button>
            </div>
        </>
    );
}
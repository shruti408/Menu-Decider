import { useContext } from "react";
import UserContext from "../context/user/usercontext";

export default function GoogleLogin() {
    const { login } = useContext(UserContext);
    async function handleClick() {
        await login();
    }
    return (
        <>
            <div class="d-flex align-items-center justify-content-center" style={{height: "33rem"}}>
                <button className="btn btn-success p-3 fs-4" onClick={handleClick}>
                    Sign In with Google
                </button>
            </div>
        </>
    );
}
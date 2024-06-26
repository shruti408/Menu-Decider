import { OAuthProvider } from "appwrite";
import { useEffect, useState } from "react";
import { account } from "../appwrite";
import UserContext from "./usercontext"

export default function UserProvider(props) {
    const [user, setUser] = useState(null);

    async function login() {
        try {
            const loggedIn = account.createOAuth2Session(
                OAuthProvider.Google, // provider
                'https://selectorweb.vercel.app/', // redirect here on success
                'https://selectorweb.vercel.app/', // redirect here on failure
                ["profile"] // scopes (optional)
            );
            setUser(loggedIn);
            // const session = await account.getSession('current');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function init() {
        try {
            const loggedIn = await account.get();
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}

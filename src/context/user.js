import { ID } from "appwrite";
import { useEffect, useState } from "react";
import { account } from "./appwrite";
import UserContext from "./usercontext"

export default function UserProvider(props) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        const loggedIn = await account.createEmailPasswordSession(email, password);
        setUser(loggedIn);
        return loggedIn;
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        const loggedInUser = await login(email, password);
        return loggedInUser;
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
        <UserContext.Provider value={{ user, login, logout, register }}>
            {props.children}
        </UserContext.Provider>
    );
}

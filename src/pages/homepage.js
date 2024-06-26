import { useContext, useEffect } from "react";
import UserContext from "../context/user/usercontext";
import ListContext from "../context/list/listContext";
import SubListContext from "../context/subList/subListContext";
import Selector from "../components/selector";
import GoogleLogin from "../components/googleLogin";
import ListPage from "./listpage";

export default function Homepage() {
    const { user } = useContext(UserContext);
    const { initList } = useContext(ListContext);
    const { subList, initSubList } = useContext(SubListContext);

    // fetching data 
    useEffect(() => {

        async function fetchData() {
            if (user) {
                try {
                    await initList(user.$id);
                    await initSubList(user.$id)
                }
                catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        }
        fetchData();

    }, [user])

    return (
        <>
            {user ? (
                (subList.length === 0) ? (<><ListPage /> </>) : (
                    <>
                        <Selector />
                    </>
                )
            ) : (<><GoogleLogin /> </>)}
        </>
    );
}


import { useContext, useEffect } from "react";
import UserContext from "../context/user/usercontext.js";
import ListsContext from "../context/lists/listsContext.js";
import ListContext from "../context/list/listContext.js";
import Navbar from "../components/home/navbar.js";
import AddNewList from "../components/lists/addNewList.js";
import Lists from "../components/lists/lists.js";


export default function Menus() {
    const { user } = useContext(UserContext);
    const { lists, initLists } = useContext(ListsContext);
    const { list, initList } = useContext(ListContext);

    // fetching data
    useEffect(() => {
        async function fetchData() {
            if (user) {
                try {
                    await initLists(user.$id);
                    await initList(user.$id);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return;
            }
        }
        fetchData();
    }, [user]);

    return (
        <>
            <Navbar />
            <AddNewList />
            {(lists.length !== 0) ? (
                <> 
                    <div className="container text-center mb-2 text-light fs-2">     
                    </div>
                    <Lists />
                </>
            ) : (<> <div className="text-light text-center">Please add a list first </div></>)}
            {(lists.length !== 0 && list.length === 0 )? (<><div className="text-light text-center mt-2">Please add a list-item first </div> </> ) : (<> </>)}
        </>
    );
}

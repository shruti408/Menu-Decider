import { useContext, useEffect } from "react";
import UserContext from "../context/usercontext.js";
import MenusContext from "../context/menusContext.js";
import MenuContext from "../context/menuContext.js";
import Navbar from "../components/navbar.js";
import AddNewList from "../components/lists/addNewList.js";
import Lists from "../components/lists/lists.js";


export default function Menus() {
    const { user } = useContext(UserContext);

    const { menus, initMenus } = useContext(MenusContext);
    const { menu, initMenu } = useContext(MenuContext);

    // fetching data
    useEffect(() => {
        async function fetchData() {
            if (user) {
                try {
                    await initMenus(user.$id);
                    await initMenu(user.$id);
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
            {(menus.length !== 0) ? (
                <> 
                    <div className="container text-center mb-2 text-light fs-2">     
                    </div>
                    <Lists />
                </>
            ) : (<> <div className="text-light text-center">Please add a list first </div></>)}
            {(menus.length !== 0 && menu.length === 0 )? (<><div className="text-light text-center mt-2">Please add a list-item first </div> </> ) : (<> </>)}
        </>
    );
}

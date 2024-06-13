import { useContext, useEffect } from "react";
import Navbar from "../navbar.js";
import AddMenu from "./addMenu.js";
import MenuList from "./menuList.js";
import UserContext from "../context/usercontext";
import MenusContext from "../context/menusContext";
import MenuContext from "../context/menuContext";

export default function Menus() {
    const { user } = useContext(UserContext);

    const { initMenusLocalStorage, initMenus } = useContext(MenusContext);
    const { initMenuLocalStorage, initMenu } = useContext(MenuContext);

    // fetching data 
    useEffect(() => {
        async function fetchData() {
            if (user) {
                try {
                    await initMenus(user.$id);
                    await initMenu(user.$id);
                }
                catch (error) {
                    console.error('Error fetching data:', error);
                }
                return;
            }
            // initMenusLocalStorage();
            // initMenuLocalStorage();
        }
        fetchData();
    }, [user])

    return (
        <>
            <Navbar />
            {/* add button starts here */}
            <AddMenu />
            {/* add button ends here  */}
            <div className="container text-center mt-1 mb-3 text-light fs-2">
                Menus
            </div>
            {/* menus list starts here  */}
            <MenuList />
            {/* menus list ends here  */}
        </>
    );
}


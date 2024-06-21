import { useContext, useEffect } from "react";
import Navbar from "../navbar.js";
import AddMenu from "./addMenu.js";
import MenuList from "./menuList.js";
import UserContext from "../context/usercontext";
import MenusContext from "../context/menusContext";
import MenuContext from "../context/menuContext";

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
            <AddMenu />
            {menus.length !== 0 ? (
                <>
                    <div className="container text-center mb-2 text-light fs-2">
                        Menus
                    </div>
                    <MenuList />
                    (menu.length === 0) ? (<> <div className="text-light text-center">Please add a list-item first </div></> )
                </>
            ) : (<> <div className="text-light text-center">Please add a list first </div></>)}
        </>
    );
}

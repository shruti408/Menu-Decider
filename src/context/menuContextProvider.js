import { useState } from "react";
import MenuContext from './menuContext.js'
import { databases } from "./appwrite.js";
import { ID, Query } from "appwrite";

export default function MenuProvider({ children }) {
    const [menu, setMenu] = useState([]);

    function initMenuLocalStorage() {
        const dishList = JSON.parse(localStorage.getItem("menu"));
        setMenu(dishList);
    }

    async function initMenu(userID) {
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            [Query.equal("userId", [userID])]
        );
        setMenu(response.documents);   
    }

    async function add(menu_item) {
        await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            ID.unique(),
            menu_item
        );
        await initMenu(menu_item.userId);
    }

    async function removeDishes(id, userID) {
        await databases.deleteDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_MENUITEMS_COLLECTION_ID, id);
        setMenu((menu) => menu.filter((item) => item.$id !== id));
        await initMenu(userID);
    }
    
    return (
        <MenuContext.Provider value={{ menu, setMenu, initMenuLocalStorage, initMenu, add, removeDishes }}>
            {children}
        </MenuContext.Provider>
    );
}


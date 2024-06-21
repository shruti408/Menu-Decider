import { useState } from "react";
import MenusContext from './menusContext.js'
import { databases } from "./appwrite";
import { ID, Query } from "appwrite";

export default function MenusProvider({ children }) {
    const [menus, setMenus] = useState([]);

    function initMenusLocalStorage() {
        const menusList = JSON.parse(localStorage.getItem("menus"));
        setMenus(menusList);
    }

    async function initMenus(userID) {
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_CATEGORY_COLLECTION_ID,
            [Query.equal("userId", userID)]
        );
        setMenus(response.documents);
        return response.documents;
    }

    async function add(menus_item) {
        await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_CATEGORY_COLLECTION_ID,
            ID.unique(),
            menus_item
        );
        await initMenus(menus_item.userId);
    }

    async function remove(id, userID) {
        await databases.deleteDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_CATEGORY_COLLECTION_ID, id);
        setMenus((menus) => menus.filter((menu) => menu.$id !== id));
        await initMenus(userID);
    }

    return (
        <MenusContext.Provider value={{ menus, setMenus, initMenusLocalStorage, initMenus, add, remove }}>
            {children}
        </MenusContext.Provider>
    );
}


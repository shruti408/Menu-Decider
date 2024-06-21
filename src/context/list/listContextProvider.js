import { useState } from "react";
import ListContext from './listContext.js'
import { databases } from "../appwrite.js";
import { ID, Query } from "appwrite";

export default function ListProvider({ children }) {
    const [list, setList] = useState([]);

    async function initList(userID) {
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            [Query.equal("userId", [userID])]
        );
        setList(response.documents);   
    }

    async function add(item) {
        await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            ID.unique(),
            item
        );
        await initList(item.userId);
    }

    async function removelist(id, userID) {
        await databases.deleteDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_MENUITEMS_COLLECTION_ID, id);
        setList((list) => list.filter((item) => item.$id !== id));
        await initList(userID);
    }
    
    return (
        <ListContext.Provider value={{ list, setList, initList, add, removelist }}>
            {children}
        </ListContext.Provider>
    );
}


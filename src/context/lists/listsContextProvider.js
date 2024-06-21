import { useState } from "react";
import ListsContext from './listsContext.js'
import { databases } from "../appwrite.js";
import { ID, Query } from "appwrite";

export default function ListsProvider({ children }) {
    const [lists, setLists] = useState([]);

    async function initLists(userID) {
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_CATEGORY_COLLECTION_ID,
            [Query.equal("userId", userID)]
        );
        setLists(response.documents);
        return response.documents;
    }

    async function add(lists_item) {
        await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_CATEGORY_COLLECTION_ID,
            ID.unique(),
            lists_item
        );
        await initLists(lists_item.userId);
    }

    async function remove(id, userID) {
        await databases.deleteDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_CATEGORY_COLLECTION_ID, id);
        setLists((lists) => lists.filter((list) => list.$id !== id));
        await initLists(userID);
    }

    return (
        <ListsContext.Provider value={{ lists, setLists, initLists, add, remove }}>
            {children}
        </ListsContext.Provider>
    );
}


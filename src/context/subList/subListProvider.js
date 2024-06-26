import { useState } from "react";
import SubListContext from './subListContext.js'
import { databases } from "../appwrite.js";
import { ID, Query } from "appwrite";

export default function SubListProvider({ children }) {
    const [subList, setSubList] = useState([]);

    async function initSubList(userID) {
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            [Query.equal("userId", [userID])]
        );
        setSubList(response.documents);
    }

    async function add(item) {
        await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
            ID.unique(),
            item
        );
        await initSubList(item.userId);
    }

    async function remove(id, userID) {

        await databases.deleteDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_MENUITEMS_COLLECTION_ID, id);
        setSubList((subList) => subList.filter((item) => item.$id !== id));
        await initSubList(userID);
    }

    function deleteSubList( userID, listsItem) {
        // deleting complete sub-lists 
        let deleteSubList = [];
        for (let j = 0; j < subList.length; j++) {
            if (
                subList[j].category === listsItem.title &&
                subList[j].userId === userID
            ) {
                deleteSubList = [...deleteSubList, subList[j].$id];
            }
        }
        if (deleteSubList.length !== 0) {
            for (let j = 0; j < deleteSubList.length; j++) {
                remove(deleteSubList[j], userID);
            }
        }
    }

    function categoriseSubList(category) {        
        let subListCategory = [];

        for (let j = 0; j < subList.length; j++) {
            if (
                subList[j].category === category
            ) {
                subListCategory = [...subListCategory, subList[j]];
            }
        }
        return subListCategory
    }

    return (
        <SubListContext.Provider value={{ subList, setSubList, initSubList, add, remove, deleteSubList, categoriseSubList }}>
            {children}
        </SubListContext.Provider>
    );
}


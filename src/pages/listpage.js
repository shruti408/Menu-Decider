import { useContext, useEffect } from "react";
import UserContext from "../context/user/usercontext.js";
import ListContext from "../context/list/listContext.js";
import SubListContext from "../context/subList/subListContext.js";
import Navbar from "../components/navbar.js";
import List from "../components/list.js";
import AddForm from "../components/addForm.js"

export default function ListPage() {
    const { user } = useContext(UserContext);
    const { list, initList, add } = useContext(ListContext);
    const { subList, initSubList } = useContext(SubListContext);

    // fetching data
    useEffect(() => {
        async function fetchData() {
            if (user) {
                try {
                    await initList(user.$id);
                    await initSubList(user.$id);
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
            <div className="container col-lg-8 mb-3 mt-2">
                <AddForm category={null} list={list} add={add} placeholder_text="eg. breakfast, clothing" />
            </div>
            {(list.length !== 0) ? (
                <>
                    <div className="container fs-2 col-lg-8">
                        <List />
                    </div>
                </>
            ) : (<> <div className="text-light text-center">Please add a list first </div></>)}
            {(list.length !== 0 && subList.length === 0) ? (<><div className="text-light text-center mt-2">Please add a list-item first </div> </>) : (<> </>)}
        </>
    );
}

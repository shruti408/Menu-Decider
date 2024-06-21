import { useState, useContext } from "react";
import ListContext from "../../context/list/listContext";
import ListsDropdown from "./listsDropdown";
import UserContext from "../../context/user/usercontext";

export default function Selector() {
    const [item, setItem] = useState("");
    const { list} = useContext(ListContext);
    const { user } = useContext(UserContext);

    // selecting item with the help of random number and List array
    function selector(e) {
        e.preventDefault();

        // lists null case 
        let listItems = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].category === e.target.List.value && user.$id === list[i].userId) {
                listItems = [...listItems, list[i].title];
            }
        }

        // list null case 
        if (list.length === 0) {
            alert("+ add dishes to List first");
            return;
        }

        // random selection 
        let random_index = Math.floor(Math.random() * list.length);
        setItem(list[random_index]);
    }

    return (
        <>
            {/* selection form starts here */}
            <form onSubmit={selector}>
                {/*lists dropdown starts here   */}
                <div className="container text-center d-flex justify-content-center mb-4 ">
                    <div className="card m-2 p-2 fs-5 text-light bg-secondary col-lg-6 col-md-8 col-9">
                        Welcome to selector.com !!
                    </div>
                    </div>
                    <div className="d-flex justify-content-center m-4">
                        <select className="form-select bg-secondary text-light fs-4 text-center" aria-label="List" name="List" style={{ width: "13rem", height: "3.5rem" }}>
                            <ListsDropdown />
                        </select>
                    </div>
                {/* lists dropdown ends here */}
                {/* list-item display card starts here  */}
                <div className="container d-flex justify-content-center my-4">
                    <div
                        className="card bg-dark text-light border text-center"
                        style={{ width: "20rem", height: "12rem" }}
                    >
                        <div className="card-body">
                            <div className="card-title m-5 fs-1">{item}</div>
                        </div>
                    </div>
                </div>
                {/* list-item display card  ends here  */}
                {/* selection-button starts here */}
                <div className="container d-flex justify-content-center my-4">
                    <button
                        type="btn"
                        className="card-link btn btn-success fs-5"
                        style={{ width: "17rem", height: "3rem" }}
                    >
                        select any one
                    </button>
                </div>
                {/* selection-button ends here */}
            </form>
            {/* selection form ends here */}
        </>
    );
}


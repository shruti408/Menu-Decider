import { useState, useContext } from "react";
import SubListContext from "../context/subList/subListContext";
import Dropdown from "./dropdown";
import UserContext from "../context/user/usercontext";
import Navbar from "./navbar";

export default function Selector() {
    const [item, setItem] = useState("");
    const { subList } = useContext(SubListContext);
    const { user } = useContext(UserContext);

    // selecting item with the help of random number and List array
    function selector(e) {
        e.preventDefault();

        // lists null case 
        let listItems = [];
        for (let i = 0; i < subList.length; i++) {
            if (subList[i].category === e.target.List.value && user.$id === subList[i].userId) {
                listItems = [...listItems, subList[i].title];
            }
        }

        // list null case 
        if (subList.length === 0) {
            return;
        }

        // random selection 
        let random_index = Math.floor(Math.random() * subList.length);
        setItem(subList[random_index]);
    }

    return (
        <>
            <Navbar />
            <div className="container">
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
                            <Dropdown />
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
            </div>
        </>
    );
}


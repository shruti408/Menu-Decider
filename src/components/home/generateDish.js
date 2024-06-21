import { useState, useContext, useEffect } from "react";
import MenuContext from "../../context/menuContext";
import MenusDropdown from "../lists/listsDropdown";
import UserContext from "../../context/usercontext";

function GenerateDish() {
    const [dish, setDish] = useState("");
    const { menu } = useContext(MenuContext);
    const { user } = useContext(UserContext);

    // generating dish with the help of random number and menu array
    function generateDish(e) {
        e.preventDefault();

        if (!(e.target.menu.value)) {
            alert("+ add menu to menus first");
            return;
        }

        if (menu.length === 0) {
            alert("+ add dishes to menu first");
            return;
        }

        // menus null case 
        let menuItems = [];
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].category === e.target.menu.value && user.$id === menu[i].userId) {
                menuItems = [...menuItems, menu[i].title];
            }
        }

        // menu null case 
        if (menuItems.length === 0) {
            alert("+ add dishes to menu first");
            return;
        }

        // generating random dish 
        let random_index = Math.floor(Math.random() * menuItems.length);
        setDish(menuItems[random_index]);
    }

    return (
        <>
            {/* generate-dish form starts here */}
            <form onSubmit={generateDish}>
                {/* menus dropdown starts here   */}
                <div className="container text-center d-flex justify-content-center mb-4 ">
                    <div className="card m-2 p-2 fs-5 text-light bg-secondary col-lg-6 col-md-8 col-9">
                        Welcome to selector.com !!
                    </div>
                    </div>
                    <div className="d-flex justify-content-center m-4">
                        <select className="form-select bg-secondary text-light fs-4 text-center" aria-label="menu" name="menu" style={{ width: "13rem", height: "3.5rem" }}>
                            <MenusDropdown />
                        </select>
                    </div>
                {/* </div> */}
                {/* menus dropdown ends here */}
                {/* dish display card starts here  */}
                <div className="container d-flex justify-content-center my-4">
                    <div
                        className="card bg-dark text-light border text-center"
                        style={{ width: "20rem", height: "12rem" }}
                    >
                        <div className="card-body">
                            <div className="card-title m-5 fs-1">{dish}</div>
                        </div>
                    </div>
                </div>
                {/* dish display card  ends here  */}
                {/* generate-dish-button starts here */}
                <div className="container d-flex justify-content-center my-4">
                    <button
                        type="btn"
                        className="card-link btn btn-success fs-5"
                        style={{ width: "17rem", height: "3rem" }}
                    >
                        generate dish
                    </button>
                </div>
                {/* generate-dish-button ends here */}
            </form>
            {/* generate-dish form ends here */}
        </>
    );
}
export default GenerateDish;


import { useState, useContext, useEffect} from "react";
import MenusContext from "../context/menusContext";
import UserContext from "../context/usercontext";

export default function AddMenu() {
    let [newMenu, setNewMenu] = useState("");
    const { menus, setMenus, add } = useContext(MenusContext);
    const {user} = useContext(UserContext);

    function handleAddButton(e) {
        e.preventDefault();

        // menu input empty case
        if (newMenu === "") {
            return;
        }

        // menus null case
        if (!menus) {
            add({userId: user.$id, title: newMenu});
            setNewMenu("");
            return;
        }

        for (var j = 0; j < menus.length; j++) {
            if (menus[j].title === newMenu && menus[j].userId === user.$id ) {
                setNewMenu("");
                alert("already present, add another");
                return;
            }
        }

        add({userId: user.$id, title: newMenu});
        setNewMenu("");
    }

    return (
        <>
            {/* add-menu starts here  */}
            <div className="container d-flex justify-content-center my-4">
                <form onSubmit={handleAddButton} className="col-md-8 col-lg-6 col-11">
                    <div className="input-group">
                        <label htmlFor="addMenu" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control bg-secondary"
                            placeholder="eg. breakfast, lunch, dinner"
                            id="addMenu"
                            aria-describedby="addMenu"
                            onChange={(e) => setNewMenu(e.target.value)}
                            value={newMenu}
                        />
                        <button type="submit" className="btn btn-dark">
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {/* add-menu ends here  */}
        </>
    );
}

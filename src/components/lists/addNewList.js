import { useState, useContext } from "react";
import ListsContext from "../../context/lists/listsContext";
import UserContext from "../../context/user/usercontext";

export default function AddNewList() {
    let [newList, setNewList] = useState("");
    const { lists, add } = useContext(ListsContext);
    const {user} = useContext(UserContext);

    function handleAddButton(e) {
        e.preventDefault();

        // menu input empty case
        if (newList === "") {
            return;
        }

        // lists null case
        if (!lists) {
            add({userId: user.$id, title: newList});
            setNewList("");
            return;
        }

        for (var j = 0; j < lists.length; j++) {
            if (lists[j].title === newList && lists[j].userId === user.$id ) {
                setNewList("");
                alert("already present, add another");
                return;
            }
        }

        add({userId: user.$id, title: newList});
        setNewList("");
    }

    return (
        <>
            {/* add-menu starts here  */}
            <div className="container d-flex justify-content-center mb-3 mt-1">
                <form onSubmit={handleAddButton} className="col-md-10 col-lg-8 col-12">
                    <div className="input-group">
                        <label htmlFor="addMenu" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control bg-secondary"
                            placeholder="eg. breakfast, lunch, clothes"
                            id="addMenu"
                            aria-describedby="addMenu"
                            onChange={(e) => setNewList(e.target.value)}
                            value={newList}
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

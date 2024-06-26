import { useState, useContext } from "react";
import UserContext from "../context/user/usercontext.js";

export default function AddForm(props) {
    const [newItem, setNewItem] = useState("");
    const { user } = useContext(UserContext);

    // adding item t0 list 
    async function handleAddButton(e) {
        e.preventDefault();
        //input empty case 
        if (newItem === "") {
            return;
        }
        // checking if value in already present in the array 
        for (let j = 0; j < props.list.length; j++) {
            if (props.category === null && props.list[j].title === newItem) {
                // category null 
                setNewItem("");
                alert("already present, add another");
                return;

            } else
                if (props.list[j].title === newItem && props.list[j].category === props.category) {
                    setNewItem("");
                    alert("already present, add another");
                    return;
                }
        }

        // adding item to list 
        if (props.category === null) {
            props.add({ userId: user.$id, title: newItem });

        } else {
            props.add({ title: newItem, category: props.category, userId: user.$id });
        }
        setNewItem("");
    }

    return (
        <>
            {/* add form starts here  */}
            <form onSubmit={handleAddButton}>
                <div className="input-group my-1">
                    <label htmlFor="addItem" className="form-label"></label>
                    <input
                        type="text"
                        className="form-control bg-secondary"
                        placeholder="eg. poha, belt"
                        id="addItem"
                        aria-describedby="addItem"
                        onChange={(e) => setNewItem(e.target.value)}
                        value={newItem}
                    />
                    <button type="submit" className="border btn btn-dark">
                        Add
                    </button>
                </div>
            </form>
            {/* add form ends here  */}
        </>
    )
}
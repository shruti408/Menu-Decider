import { useState, useContext } from "react";
import ListContext from "../../context/list/listContext.js";
import UserContext from "../../context/user/usercontext.js";

export default function AddListItem({ category }) {
    const [item, setItem] = useState("");
    const { list, add } = useContext(ListContext);
    const { user } = useContext(UserContext);

    // adding value t0 list 
    async function handleAddButton(e) {
        e.preventDefault();
        //input empty case 

        if (item === "") {
            return;
        }

        // checking if value in already present in the array 
        if (list.length !== 0) {
            for (let j = 0; j < list.length; j++) {
                if (list[j].title === item && list[j].category === category && list[j].userId === user.$id) {
                    setItem("");
                    alert("already present, add another dish");
                    return;
                }
            }
        }
        add({ title: item, category: category, userId: user.$id });
        setItem("");
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
                        onChange={(e) => setItem(e.target.value)}
                        value={item}
                    />
                    <button type="submit" className="btn btn-dark">
                        Add
                    </button>
                </div>
            </form>
            {/* add form ends here  */}
        </>
    )
}
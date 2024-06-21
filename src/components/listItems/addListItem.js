import { useState, useContext } from "react";
import MenuContext from "../../context/menuContext";
import UserContext from "../../context/usercontext";

export default function AddListItem({ category}) {
    const [dish, setDish] = useState("");
    const { menu, add } = useContext(MenuContext);
    const {user} = useContext(UserContext);

    // adding value t0 menu 
    async function handleAddButton(e) {
        e.preventDefault();
        //input empty case 

        if (dish === "") {
            return;
        }

        // checking if value in already present in the array 
        if (menu.length !== 0) {
            for (let j = 0; j < menu.length; j++) {
                if (menu[j].title === dish && menu[j].category === category && menu[j].userId === user.$id) {
                    setDish("");
                    alert("already present, add another dish");
                    return;
                }
            }
        }
        add({ title: dish, category: category, userId: user.$id});
        setDish("");
    }
    
    return (
        <>
            {/* add form starts here  */}
                <form onSubmit={handleAddButton}>
                    <div className="input-group my-1">
                        <label htmlFor="addDish" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control bg-secondary"
                            placeholder="eg. poha"
                            id="addDish"
                            aria-describedby="addDish"
                            onChange={(e) => setDish(e.target.value)}
                            value={dish}
                        />
                        <button type="submit" className="btn btn-dark">
                            Add
                        </button>
                    </div>
                </form>
            {/* </div> */}
            {/* add form ends here  */}
        </>
    )
}
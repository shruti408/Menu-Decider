import { useContext } from "react";
import MenuContext from "../context/menuContext";
import UserContext from "../context/usercontext";
import DeleteDish from "./deleteDish";

export default function Menu({ category }) {
    const { menu } = useContext(MenuContext);
    const { user } = useContext(UserContext);

    // menu null case 
    if (menu.length === 0 || !user) {
        return;
    }

    let copyMenu = []
    
    for (let j = 0; j < menu.length; j++) {
        if (
            menu[j].userId === user.$id && menu[j].category === category
        ) {
            copyMenu = [...copyMenu, menu[j]];
        }
    }

    if(copyMenu.length === 0 ){
        return;
    }


    return (
        <>
            {/* menu list starts here  */}
            <ul className="list-group list-group-flush">
                {
                    copyMenu.map((dish, i) => {
                        return (
                            // Menu list item starts here
                            < li className="list-group-item bg-dark text-light" key={i} >
                                <div className="row">
                                    {/* menu list number starts here */}
                                    <span className="col-1 fs-5">*</span>
                                    {/* menu list number ends here */}
                                    {/* menu title starts here */}
                                    <span className="col-8 fs-5">{dish.title}</span>
                                    {/* menu title starts here */}
                                    {/* menu delete button starts here */}
                                    <span className="col-1 mt-1">
                                        <DeleteDish dish={dish} />
                                    </span>
                                    {/* menu delete button ends here  */}
                                </div>
                            </li>
                            //  Menu list item ends here 
                        )
                    })
                }
            </ul>
            {/* menu list end  here */}

        </>
    );
}


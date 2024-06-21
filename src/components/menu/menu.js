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
                                    <div className="col-1 fs-5">*</div>
                                    {/* menu list number ends here */}
                                    {/* menu title starts here */}
                                    <div className="col-8 col-lg-9 col-md-9 fs-5">{dish.title}</div>
                                    {/* menu title starts here */}
                                    {/* menu delete button starts here */}
                                    <div className="col-1 col-lg-2 col-md-2 mt-1">
                                        <DeleteDish dish={dish} />
                                    </div>
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


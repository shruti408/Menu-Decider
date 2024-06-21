import { useContext } from "react";
import ListContext from "../../context/list/listContext.js";
import UserContext from "../../context/user/usercontext";
import DeleteListItem from "./deleteListItem";

export default function ListItems({ category }) {
    const { list } = useContext(ListContext);
    const { user } = useContext(UserContext);

    // list null case 
    if (list.length === 0 || !user) {
        return;
    }

    let copyList = []
    
    for (let j = 0; j < list.length; j++) {
        if (
            list[j].userId === user.$id && list[j].category === category
        ) {
            copyList = [...copyList, list[j]];
        }
    }

    if(copyList.length === 0 ){
        return;
    }


    return (
        <>
            {/* list list starts here  */}
            <ul className="list-group list-group-flush">
                {
                    copyList.map((item, i) => {
                        return (
                            // list list item starts here
                            < li className="list-group-item bg-dark text-light" key={i} >
                                <div className="row">
                                    {/* list list number starts here */}
                                    <div className="col-1 fs-5">*</div>
                                    {/* list list number ends here */}
                                    {/* list title starts here */}
                                    <div className="col-8 col-lg-9 col-md-9 fs-5">{item.title}</div>
                                    {/* list title starts here */}
                                    {/* list delete button starts here */}
                                    <div className="col-1 col-lg-2 col-md-2 mt-1">
                                        <DeleteListItem item={item} />
                                    </div>
                                    {/* list delete button ends here  */}
                                </div>
                            </li>
                            //  list list item ends here 
                        )
                    })
                }
            </ul>
            {/* list list end  here */}

        </>
    );
}


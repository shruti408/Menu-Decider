import { useContext } from "react";
import SubListContext from "../context/subList/subListContext.js";
import DeleteButton from "./deleteButton.js";

export default function SubList({ category }) {
    const { subList, remove, categoriseSubList } = useContext(SubListContext);
    if (!subList) {
        return;
    }
    const userSubList = categoriseSubList(category);
    if (!userSubList) {
        return;
    }

    return (
        <>
            {/* subList starts here  */}              
            {userSubList.map((item, i) => {
                return (
                    <li className="list-group-item bg-dark text-light" key={i}>
                        <div className="row align-items-center col-12 fs-5">
                            {/* subList-item numbering starts here */}
                            <div className="col-1">{i+1}.</div>
                            {/* subList-item numbering ends here */}
                            {/* sub-subList title starts here */}
                            <div className="col">{item.title}</div>
                            {/* sub-subList title starts here */}
                            {/* sub-subList delete button starts here */}
                            <div className="col-1 ">
                                <DeleteButton item={item} remove={remove} subList={null} />
                            </div>
                            {/* sub-subList delete button ends here  */}
                        </div>
                    </li>
                    //  subList-item ends here 
                )
            })
            }
            {/* subList end  here */}
        </>
    );
}


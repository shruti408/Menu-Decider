import { useContext, useState } from "react";
import ListsContext from "../../context/lists/listsContext.js";
import DeleteButton from "./deleteButton.js";
import AddListItem from "../list/addListItem.js";
import ListItems from "../list/listItems.js";

export default function Lists() {
    // array of lists
    const { lists } = useContext(ListsContext);
    const [expandedIndex, setExpandedIndex] = useState(0); // Initial expanded item

    if (!lists) {
        return;
    }

    const handleCollapse = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    return (
        <>
            {/* lists starts here  */}
            {
                lists.map((menu, i) => {
                    return (
                        <div className="container d-flex justify-content-center" key={i}>

                            <li className="mb-1 list-group-item col-12 col-lg-8 col-md-10">
                                {/* lists-item starts here */}
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <div className={`accordion-header bg-secondary text-center`} style={{ height: "3.2rem" }}>
                                            <div className="row">
                                                <div className="col-md-10 col-9">
                                                    <button
                                                        className={`btn accordian-button fs-4 text-light collapsed col-12`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${i}`}
                                                        onClick={() => handleCollapse(i)}
                                                        aria-expanded="true"
                                                        aria-controls="menu"
                                                    >
                                                        {lists[i].title}
                                                    </button>
                                                </div>
                                                <div className="col mt-3">
                                                    <DeleteButton listsItem={menu} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id={`collapse-${i}`}
                                            className={`accordion-collapse collapse ${i === expandedIndex ? 'show' : ''
                                                }`}
                                        >
                                            <div className="accordion-body bg-dark">
                                                <AddListItem category={lists[i].title} />
                                                <ListItems category={lists[i].title} />
                                            </div>

                                        </div>
                                    </div>
                                    {/* lists-item ends here */}
                                </div>
                            </li>
                        </div>
                    );
                }
                )}
            {/* lists ends here  */}
        </>
    );
}


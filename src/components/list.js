import { useContext, useState } from "react";
import ListContext from "../context/list/listContext.js";
import SubListContext from "../context/subList/subListContext.js";
import AddForm from "./addForm.js";
import SubList from "./subList.js";
import DeleteButton from "./deleteButton.js";

export default function List() {
    // array of lists
    const { list, remove } = useContext(ListContext);
    const { subList, add } = useContext(SubListContext);
    const [expandedIndex, setExpandedIndex] = useState(0); // Initial expanded item

    if (!list) {
        return;
    }

    const handleCollapse = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    return (
        <>
            {/* lists starts here  */}
            {
                list.map((menu, i) => {
                    return (
                        <li className="mb-1 list-group-item bg-dark" key={i}>
                            {/* lists-item starts here */}
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-header bg-secondary text-center" style={{ height: "3.2rem" }}>
                                        <div className="row align-items-center">
                                            <div className="col-8 col-lg-10 col-md-10 col-sm-10">
                                                <button
                                                    className="btn accordian-button fs-4 text-light collapsed col-12"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${i}`}
                                                    onClick={() => handleCollapse(i)}
                                                    aria-expanded="true"
                                                    aria-controls="list"
                                                >
                                                    {list[i].title}
                                                </button>
                                            </div>
                                            <div className="col align-items-end">
                                                <DeleteButton item={menu} remove={remove} subList={subList} color="dark" />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id={`collapse-${i}`}
                                        className={`accordion-collapse collapse ${i === expandedIndex ? 'show' : ''
                                            }`}
                                    >
                                        <div className="accordion-body bg-dark">
                                            <AddForm category={list[i].title} list={subList} add={add} placeholder_text="eg. poha, belt" />
                                            <SubList category={list[i].title} />
                                        </div>
                                    </div>
                                </div>
                                {/* lists-item ends here */}
                            </div>
                        </li>
                    );
                }
                )}
            {/* lists ends here  */}
        </>
    );
}


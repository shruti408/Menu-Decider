import { useContext, useState } from "react";
import MenusContext from "../../context/menusContext.js";
import DeleteButton from "./deleteButton.js";
import AddListItem from "../listItems/addListItem.js";
import ListItems from "../listItems/listItems.js";

export default function Lists() {
    // array of menus
    const { menus } = useContext(MenusContext);
    const [addBtnDisplay, setAddBtnDisplay] = useState("inline");
    // const [closeBtnDisplay, setCloseBtnDisplay] = useState("none");
    // const [menuTitleDisplay, setMenuTitleDisplay] = useState("inline");
    // const [addFormDisplay, setAddFormDisplay] = useState("none");
    const [expandedIndex, setExpandedIndex] = useState(0); // Initial expanded item
    // const [menuTitleBg, setMenuTitleBg] = useState("secondary");

    if (!menus) {
        return;
    }

    const handleCollapse = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
        setAddBtnDisplay(addBtnDisplay === "none" ? "inline" : "none"); // Toggle expansion
    };
    function handleAdd() {
        // setAddFormDisplay(addFormDisplay === "none" ? "inline" : "none");
    }

    return (
        <>
            {/* <div className="container ms-2"> */}

                {/* menus list starts here  */}
                {
                    menus.map((menu, i) => {
                        return (
                            <div className="container d-flex justify-content-center">

                            <li className="mb-1 list-group-item col-12 col-lg-8 col-md-10" key={i}>
                                {/* Menu list item starts here */}
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
                                                        {menus[i].title}
                                                    </button>
                                                </div>
                                                <div className="col mt-3">
                                                    <DeleteButton menusItem={menu} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id={`collapse-${i}`}
                                            className={`accordion-collapse collapse ${i === expandedIndex ? 'show' : ''
                                                }`}
                                        >
                                            <div className="accordion-body bg-dark">
                                                <AddListItem category={menus[i].title} />
                                                <ListItems category={menus[i].title} />
                                                {/* <div className="col d-flex justify-content-center">
                                                    <button type="btn" className={`me-1 btn btn-secondary d-${addBtnDisplay}`}
                                                        onClick={handleAdd}>
                                                        +Add
                                                    </button>
                                                </div> */}
                                            </div>

                                        </div>
                                    </div>
                                    {/* Menu list item ends here */}
                                </div>
                            </li>
                            </div>
                        );
                    }
                    )}
                {/* menus list ends here  */}
            {/* </div> */}
        </>
    );
}



// list 2 items only
// click complete list
// add button click add from 

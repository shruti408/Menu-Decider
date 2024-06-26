import { useContext } from "react";
import ListContext from "../context/list/listContext";

export default function Dropdown() {
    const { list } = useContext(ListContext);
    
    if (!list) {
        return;
    }

    return (
        <>
            {/* lists dropdown list options starts here */}
            {list.map((item, i) => {
                return (
                    <option value={list[i].title} key={i}>
                        {list[i].title}
                    </option>
                );
            })}

            {/* lists dropdown list options ends here */}
        </>
    );
}

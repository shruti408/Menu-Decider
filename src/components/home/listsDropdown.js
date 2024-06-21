import { useContext } from "react";
import ListsContext from "../../context/lists/listsContext";

export default function ListsDropdown() {
    const { lists } = useContext(ListsContext);
    
    if (!lists) {
        return;
    }

    return (
        <>
            {/* lists dropdown list options starts here */}
            {lists.map((item, i) => {
                return (
                    <option value={lists[i].title} key={i}>
                        {lists[i].title}
                    </option>
                );
            })}

            {/* lists dropdown list options ends here */}
        </>
    );
}

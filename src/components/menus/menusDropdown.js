import { useContext } from "react";
import MenusContext from "../context/menusContext";

export default function MenusDropdown() {
    const { menus } = useContext(MenusContext);
    
    if (!menus) {
        return;
    }

    return (
        <>
            {/* menus dropdown list options starts here */}
            {menus.map((menu, i) => {
                return (
                    <option value={menus[i].title} key={i}>
                        {menus[i].title}
                    </option>
                );
            })}

            {/* menus dropdown list options ends here */}
        </>
    );
}

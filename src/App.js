import { useContext, useEffect } from "react";
import Navbar from "./components/navbar";
import GenerateDish from "./components/generateDish";
import UserContext from "./components/context/usercontext";
import MenusContext from "./components/context/menusContext";
import MenuContext from "./components/context/menuContext";

export default function App() {
  const { user } = useContext(UserContext);
  const { initMenusLocalStorage, initMenus } = useContext(MenusContext);
  const { initMenuLocalStorage, initMenu } = useContext(MenuContext);

  // fetching data 
  useEffect(() => {
    async function fetchData() {
      if (user) {
        try {
          await initMenus(user.$id);
          await initMenu(user.$id);
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
        return;
      }
      // initMenusLocalStorage();
      // initMenuLocalStorage();
    }
    fetchData();
  }, [user])

  return (
    <>
      <Navbar />
      <div className="container">
        {/* generate-dish component starts here */}
        <GenerateDish />
        {/* generate-dish component ends here */}
      </div>
    </>
  );
}


import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import GenerateDish from "./components/generateDish";
import UserContext from "./components/context/usercontext";
import MenusContext from "./components/context/menusContext";
import MenuContext from "./components/context/menuContext";
import LoginPage from "./components/loginPage";

export default function App() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { initMenus } = useContext(MenusContext);
  const { menu, initMenu } = useContext(MenuContext);

  useEffect(() => {
    if (user && menu.length === 0) {
      navigate("/menus");
    }
  }, [])

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
      }
    }
    fetchData();

  }, [user])

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="container">
            <GenerateDish />
          </div>
        </>
      ) : (<><LoginPage /></>)}
    </>
  );
}


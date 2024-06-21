import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import GenerateDish from "../components/home/generateDish";
import UserContext from "../context/usercontext";
import MenusContext from "../context/menusContext";
import MenuContext from "../context/menuContext";
import LoginPage from "./loginPage";

export default function Homepage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { menus, initMenus } = useContext(MenusContext);
  const { menu, initMenu } = useContext(MenuContext);

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
        (menu.length === 0) ? (navigate("/lists")) : (
        <>
          <Navbar />
          <div className="container">
            <GenerateDish />
          </div>
        </>
        )
      ) : (<><LoginPage /></>)}
    </>
  );
}


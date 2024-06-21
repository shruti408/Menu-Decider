import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user/usercontext";
import ListsContext from "../context/lists/listsContext";
import ListContext from "../context/list/listContext";
import Navbar from "../components/home/navbar";
import Selector from "../components/home/selector";
import GoogleLogin from "../components/home/googleLogin";

export default function Homepage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { initLists } = useContext(ListsContext);
  const { list, initList } = useContext(ListContext);

  // fetching data 
  useEffect(() => {

    async function fetchData() {
      if (user) {
        try {
          await initLists(user.$id);
          await initList(user.$id)
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
        (list.length === 0) ? (navigate("/lists")) : (
        <>
          <Navbar />
          <div className="container">
            <Selector />
          </div>
        </>
        )
      ) : (<><GoogleLogin /> </>)}
    </>
  );
}


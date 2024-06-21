import { useContext } from "react";
import ListsContext from "../../context/lists/listsContext";
import ListContext from "../../context/list/listContext";
import UserContext from "../../context/user/usercontext";

export default function DeleteButton({ listsItem }) {
  let { lists, remove } = useContext(ListsContext);
  let { list, removeListItem } = useContext(ListContext);
  const { user } = useContext(UserContext);

  function handleDelete() {
    if(!lists || !user){
      return; 
    }
  
    // deleting list from lists
    if (user.$id === listsItem.userId) {
      remove(listsItem.$id, user.$id);
    }
    // deleting all sub-lists 
    let copylist = [];
    if (list.length !== 0) {
      for (let j = 0; j < list.length; j++) {
        if (
          list[j].category === listsItem.title &&
          list[j].userId === user.$id
        ) {
          copylist = [...copylist, list[j].$id];
        }
      }
    }
    if (copylist.length !== 0) {
      for (let j = 0; j < copylist.length; j++) {
        removeListItem(copylist[j]);
      }
    }
  }
  return (
    <>
      {/* delete button starts here  */}
      <button className="btn btn-secondary text-dark" onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-trash3-fill d-flex justify-content-end"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
        </svg>
      </button>
      {/* delete button ends here  */}
    </>
  );
}

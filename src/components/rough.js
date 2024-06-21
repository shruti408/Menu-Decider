// function AddTodo() {
//     let [todo, setTodo] = useState("");
//     let { todoList, setTodoList } = useContext(TodoContext);

//     useEffect(() => {
//         localStorage.setItem("todoList", JSON.stringify(todoList));
//     }, [todoList])

//     function handleAddTodo(e) {
//         e.preventDefault();
        
//         // todo input empty case 
//         if (todo === "") {
//             return;
//         }

//         // todoList null case 
//         if (!todoList) {
//             const copyTodoList = [{ id: Date.now(), title: todo, todoCompleted: false }]
//             setTodoList(copyTodoList);
//             setTodo("");
//             return;
//         }

//         for (var j = 0; j < todoList.length; j++) {
//             if (todoList[j].title === todo) {
//                 setTodo("");
//                 alert("already present, add another todo");
//                 return;
//             }
//         }

//         const copyTodoList = [...todoList, { id: Date.now(), title: todo, todoCompleted: false }];
//         setTodoList(copyTodoList);
//         setTodo("");
//     }


//         let todos = JSON.parse(localStorage.getItem("todoList"));
//         const [todoList, setTodoList] = React.useState(todos)
// async function init() {
//     const response = await databases.listDocuments(
//         process.env.REACT_APP_APPWRITE_DATABASE_ID,
//         process.env.REACT_APP_MENUITEMS_COLLECTION_ID,
//         // [Query.equal("userId", [userID])]
//         []
//     );
//     setMenu(response.documents);   
// }



// homepage  
// ui - user auth 

// pages 
// Home  
// menus 
// login 
// register 

// add functionality to these pages 
// connect db 
// deploy 

// bootstrap
// js React
// routing 
// context api  
// db
// auth 
// responsive 
// local storage

// query userId 
// ui update look response 
// local storage  
// deploy 

// console.log(process.env.REACT_APP_APPWRITE_URL);
// console.log("project-id", process.env.REACT_APP_APPWRITE_PROJECT_ID)
// console.log("database-id", process.env.REACT_APP_APPWRITE_DATABASE_ID)
// console.log("category-Id", process.env.REACT_APP_CATEGORY_COLLECTION_ID);
// console.log("menuitmes-id", process.env.REACT_APP_MENUITEMS_COLLECTION_ID);


// if (menus && user) {
//     for (let j = 0; j < menus.length; j++) {
//         if (
//             menus[j].userId === user.$id
//         ) {
//             copyMenus = [...copyMenus, menus[j]];
//         }
//     }
// }

if(!user){
    return;
//     // local storage 
//     let copyMenu = [...copyMenu, dish];
//     setMenu(copyMenu);
//     localStorage.setItem("menu", JSON.stringify(copyMenu));
}
if(!user){
    // let copyMenu = [...menu]
    // copyMenu.splice()
    // setMenu(copyMenu);
    return; //local storage 
    // filter dish 
}

if (!user) {
    // copyMenu = menu; //local storage 
return;
}

if(!user){
    // let copyMenus = [...menus, newMenu];
    // setMenus(copyMenus);
    // local-storage
    return; 
}


// menus menuitem heading center menu item accordian display 
// local storage 
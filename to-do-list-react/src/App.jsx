import { useState, useRef, useEffect, use } from "react"
import { MyContext } from "./components/MyContext"
import AddTask from "./components/AddTask"

function App() {
  const [array, setArray] = useState(["apple", "banana"]);
  const [users, setUsers] = useState([
    {id: 1, username: "Spongebob"},
    {id: 2, username: "Patrick"},
    {id: 3, username: "Sandy"},
  ]);

  // const testArr = users.map((user) => {
  //   console.log(user.id);
  // })



  const clearConsoleFn = () => {
    console.clear();
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-full w-1/2 flex flex-col items-center border-2 border-red-600">
          <MyContext.Provider value={{array, setArray, users, setUsers}}>
            <div onClick={clearConsoleFn} className="text-5xl mt-12 mb-12 cursor-pointer">TO DO LIST</div>
            <div className="h-1/12 w-1/2 flex justify-between">
              <input type="text" className="h-full w-8/12 border-2 border-black text-xl rounded-xl" />
              <button className="h-full w-3/12 border-2 border-black text-2xl rounded-4xl hover:bg-gray-400 active:bg-gray-300 cursor-pointer">Submit</button>
            </div>
            {/* <AddTask /> */}
            {users.map((user) => {
              return <AddTask id={user.id} username={user.username} />
            })}
          </MyContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App

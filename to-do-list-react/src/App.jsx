import { useState, useRef, useEffect } from "react"
import { MyContext } from "./components/MyContext"
import AddTask from "./components/AddTask"

function App() {
  const [list, setList] = useState(["task1", "task2"]);
  

  const clearConsoleFn = () => {
    console.clear();
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-full w-1/2 flex flex-col items-center border-2 border-red-600">
          <MyContext.Provider value={{list, setList}}>
          <div onClick={clearConsoleFn} className="text-3xl mb-12">TO DO LIST</div>
          <div className="h-1/12 w-1/2 flex justify-between">
            <input type="text" className="h-full w-8/12 border-2 border-black text-xl rounded-xl" />
            <button onClick={""} className="h-full w-3/12 border-2 border-black text-2xl rounded-4xl hover:bg-gray-400 active:bg-gray-300 cursor-pointer">Submit</button>
          </div>
            <AddTask />
          </MyContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App

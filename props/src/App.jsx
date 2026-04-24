import { useState } from "react"
import Create from "./components/Create"
import Read from "./components/Read"


const App = () => {

  const[todo , setTodo] = useState([
    {id:1 , title : "Do some work" , isCompleted : false}
  ])

  return (
    <>
      <Create todo={todo} setTodo={setTodo}/> 
      <Read todo={todo} setTodo={setTodo}/>

    </>
  )
}

export default App

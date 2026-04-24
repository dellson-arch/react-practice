import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const Read = () => {
  const [todo , setTodo] = useContext(TodoContext)

  const deleteHandler = (id)=>{
    const filterTodo = todo.filter((todo)=>todo.id != id)
    setTodo(filterTodo)
  }

  return (
   <>
      <ul>
      {todo.map((item) => (
        <li key={item.id}>
          {item.title} | <span onClick={() => deleteHandler(item.id)}>delete</span>
        </li>
      ))}
    </ul>
    
   </>
  )
}

export default Read

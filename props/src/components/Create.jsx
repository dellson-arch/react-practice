import { nanoid } from "nanoid"
import { useState } from "react"

const Create = (props) => {
    const todo = props.todo
    const setTodo = props.setTodo

    const[title, setTitle] = useState("")

    const SubmitHandler = (e)=>{

        e.preventDefault()
        const newTodo = {
            id : nanoid(),
            title : title,
            isCompleted : false
        }

        setTodo([...todo , newTodo])
    }
  return (
    <form onSubmit={SubmitHandler}>
     <input 
     type="text"
     placeholder="title" 
     onChange={(e)=>setTitle(e.target.value)}
     value={title}
     />
    </form>
  )
}

export default Create




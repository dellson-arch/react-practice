import { useState } from "react"
import TodoContext from "../context/TodoContext"

const Wrapper = (props) => {
  const [todo, setTodo] = useState([
    { id: 1, title: "do Something", isCompleted: false },
  ])

  return (
    <TodoContext.Provider value={[ todo, setTodo ]}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default Wrapper

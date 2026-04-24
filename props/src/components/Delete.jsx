const Delete = (props) => {
    const todo = props.todo
    const setTodo = props.setTodo
     const id = props.id

     const DeleteHandler = () => {
        
    const filteredTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filteredTodo);
  };
  return (
    <div>
      <button onClick={DeleteHandler}>Delete</button>
    </div>
  )
}

export default Delete

import Delete from "./Delete";

const Read = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;

  const renderTodos = todo.map((item) => {
    return (
      <li key={item.id}>
        {item.title}
        <Delete todo={todo} setTodo={setTodo} id={item.id} />
      </li>
    );
  });

  return (
    <div>
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;

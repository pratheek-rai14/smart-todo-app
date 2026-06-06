const Todo = ({ todo, onDelete, onUpdate }) => {
  return (
    <div>
      <h3
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </h3>

      <button onClick={() => onUpdate(todo._id)}>
        Complete
      </button>

      <button onClick={() => onDelete(todo._id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;

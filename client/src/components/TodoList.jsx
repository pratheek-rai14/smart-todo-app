import TodoItem from "./TodoItem";

const TodoList = ({ 
  todos, 
  onDelete, 
  onUpdate,
  onEdit,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
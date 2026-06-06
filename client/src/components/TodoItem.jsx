import "../styles/TodoItem.css";
import {
  FaCheck,
  FaTrash,
  FaEdit,
  FaCalendarAlt,
} from "react-icons/fa";

const TodoItem = ({
  todo,
  onDelete,
  onUpdate,
  onEdit,
}) => {
  return (
    <div className={`todo-item ${ todo.priority?.toLowerCase()}-border`}>
      <div className="todo-content">
        <h3
          className={
            todo.completed
              ? "completed"
              : ""
          }
        >
          {todo.title}
        </h3>

        {todo.priority && (
          <p>
            Priority:{" "}
            <span
              className={`priority ${todo.priority.toLowerCase()}`}
            >
              {todo.priority}
            </span>
          </p>
        )}

        {todo.dueDate && (
          <p className="todo-date">
            <FaCalendarAlt />{" "}
            Due:{" "}
            {new Date(
              todo.dueDate
            ).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className="todo-buttons">
        <button
          className="edit-btn"
          onClick={() =>
            onEdit(todo)
          }
        >
          <FaEdit /> Edit
        </button>

        <button
          className="complete-btn"
          onClick={() =>
            onUpdate(todo._id)
          }
        >
          <FaCheck />{" "}
          {todo.completed
            ? "Completed"
            : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(todo._id)
          }
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
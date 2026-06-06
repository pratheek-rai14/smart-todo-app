import { useState, useEffect } from "react";
import "../styles/TodoForm.css";

const TodoForm = ({ 
  onAddTodo,
  onEditTodo,
  editingTodo,
}) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setPriority(editingTodo.priority);

      setDueDate(
        editingTodo.dueDate
          ? editingTodo.dueDate.split("T")[0]
          : ""
      );
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.trim()) return;

  if (editingTodo) {
    onEditTodo(
      editingTodo._id,
      {
        title,
        priority,
        dueDate,
      }
    );
  } else {
    onAddTodo({
      title,
      priority,
      dueDate,
    });
  }

  setTitle("");
  setPriority("Medium");
  setDueDate(
     editingTodo?.dueDate
    ? editingTodo.dueDate.split("T")[0]
    : ""
  );
};

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      <button type="submit">
        {editingTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;

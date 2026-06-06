import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { toast } from "react-toastify";
import StatsCard from "../components/StatsCard";

import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  editTodo,
} from "../services/todoService";

import "../styles/Dashboard.css";
import {
  FaCheck,
  FaTrash,
  FaEdit,
  FaCalendarAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Search & Filter States
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load Todos
  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // Add Todo
  const handleAddTodo = async (
    todoData
  ) => {
    try {
      await addTodo(todoData);

      toast.success(
        "Task Added Successfully"
      );

      loadTodos();
    } catch (error) {
      toast.error("Failed To Add Task");
    }
  };

  // Update Todo
  const handleUpdateTodo = async (id) => {
    await updateTodo(id);
    loadTodos();
  };

  const handleEditTodo = (todo) => {
  setEditingTodo(todo);
};

  // Save Edited Todo
const handleSaveEdit = async (
  id,
  todoData
) => {
  try {
    await editTodo(
      id,
      todoData
    );

    toast.success(
      "Task Updated Successfully"
    );

    setEditingTodo(null);

    loadTodos();
  } catch (error) {
    toast.error(
      "Failed To Update Task"
    );
  }
};

  // Delete Todo
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  // Filtered Todos
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && todo.completed;
    }

    if (filter === "pending") {
      return matchesSearch && !todo.completed;
    }

    return matchesSearch;
  });

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">

        <div className="toolbar">
        <input
          type="text"
          placeholder="Search Todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        </div>

        <StatsCard todos={todos} />

        {/* Todo Form */}
        <TodoForm
          onAddTodo={handleAddTodo}
          onEditTodo={handleSaveEdit}
          editingTodo={editingTodo}
        />

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
};

export default Dashboard;
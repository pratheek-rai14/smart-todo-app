import "../styles/StatsCard.css";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const StatsCard = ({ todos }) => {
  const total =
    todos.length;

  const completed =
    todos.filter(
      (todo) => todo.completed
    ).length;

  const pending =
    total - completed;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <FaTasks />
        <h2>{total}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <FaCheckCircle />
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <FaClock />
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default StatsCard;


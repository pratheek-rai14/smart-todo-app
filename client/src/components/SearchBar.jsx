// import "../styles/TodoForm.css";
import { FaSearch } from "react-icons/fa";

// const SearchBar = ({ search, setSearch }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Search Todos"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       className="search-input"
//     />
//   );
// };

// export default SearchBar;

<div className="search-container">
  <FaSearch className="search-icon" />

  <input
    type="text"
    placeholder="Search Todos..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
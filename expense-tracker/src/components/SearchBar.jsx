// src/components/SearchBar.jsx

export default function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search expenses"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
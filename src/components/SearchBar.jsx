import React, { useState } from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    onSearch(query);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          className="search_input"
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search articles...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <IconButton className="clear-icon" onClick={handleClear}>
            <ClearIcon style={{ fontSize: '1.5rem' }} />
          </IconButton>
        )}
        <div>
        <IconButton type="submit" className="search_icon">
          {loading ? <CircularProgress size={24} /> : <SearchIcon style={{ fontSize: '2rem' }} />}
        </IconButton>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

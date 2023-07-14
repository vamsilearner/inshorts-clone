import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ setCategory }) {
  return (
    <div className="categoryFilter">
      <select onChange={e => setCategory(e.target.value)} defaultValue={localStorage.getItem('category')}>
        <option value="all">All</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
}

export default CategoryFilter;

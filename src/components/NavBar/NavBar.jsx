import React from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import "./NavBar.css";

function NavBar({ setCategory }) {
  return (
    <div className="navBar">
      <div>
        <CategoryFilter setCategory={setCategory} />
      </div>
      <h3>NewsApp</h3>
    </div>
  );
}

export default NavBar;

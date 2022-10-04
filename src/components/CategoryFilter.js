import React from "react";

function CategoryFilter({categories, onClickCategory}) {
  const categoryBtns = categories.map((category, index) => <button key={index} value={category} onClick={onClickCategory}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;

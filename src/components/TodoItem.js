import React from "react";
import "./TodoItem.css";
export default function TodoItem({
  item,
  index,
  handleCheckChange,
  handleDeleteItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleCheckChange(index)}
      />

      <span className={item.isChecked ? "strike-through" : ""}>
        {item.text}
      </span>
      <div>
        <button onClick={() => handleDeleteItem(index)}>Delete</button>
      </div>
    </li>
  );
}

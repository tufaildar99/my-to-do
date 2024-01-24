import React, { useState } from "react";
import "./AddToDo.css";

export default function AddTodo({ handleAddItem }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <div className="addtodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem(item);
          setItem("");
        }}
      >
        <input
          type="text"
          placeholder="Add an item"
          value={item}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

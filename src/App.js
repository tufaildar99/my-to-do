import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, { text: item, isChecked: false }]);
  }
  function handleCheckChange(index) {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }
  return (
    <>
      <Header />
      {items.length > 0 ? (
        <TodoList items={items} handleCheckChange={handleCheckChange} />
      ) : (
        <p className="empty-message">No items in the list. Please add some.</p>
      )}
      <AddTodo handleAddItem={handleAddItem} />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>To-Do List App</h1>
    </div>
  );
}
function TodoList({ items, handleCheckChange }) {
  return (
    <div className="todolist">
      <ul className="list">
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckChange(index)}
            />

            <span className={item.isChecked ? "strike-through" : ""}>
              {item.text}
            </span>
            <div>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddTodo({ handleAddItem }) {
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

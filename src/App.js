import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <>
      <Header />
      {items.length > 0 ? (
        <TodoList items={items} />
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
function TodoList({ items }) {
  return (
    <div className="todolist">
      <ul className="list">
        {items.map((item) => (
          <li>
            <input type="checkbox" />
            {item}
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

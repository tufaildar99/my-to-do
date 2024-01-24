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

  function handleDeleteItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }
  return (
    <>
      <Header />
      {items.length > 0 ? (
        <TodoList
          items={items}
          handleCheckChange={handleCheckChange}
          handleDeleteItem={handleDeleteItem}
        />
      ) : (
        <p className="empty-message">No items in the list. Please add some.</p>
      )}
      <AddTodo handleAddItem={handleAddItem} />
      <Footer />
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
function TodoList({ items, handleCheckChange, handleDeleteItem }) {
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
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
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
function Footer() {
  return <footer className="footer">Designed with ❤️ by Tufaildar</footer>;
}

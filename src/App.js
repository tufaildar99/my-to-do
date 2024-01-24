import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddToDo";
import Footer from "./components/Footer";

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

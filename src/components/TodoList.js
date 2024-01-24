import React from "react";
import TodoItem from "./TodoItem";
import "./TodoLsit.css";

export default function TodoList({
  items,
  handleCheckChange,
  handleDeleteItem,
}) {
  return (
    <div className="todolist">
      <ul className="list">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            handleCheckChange={handleCheckChange}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

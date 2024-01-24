import React from "react";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <TodoList />
      <AddTodo />
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
function TodoList() {
  return (
    <div className="todolist">
      <ul className="list">
        <li>
          <input type="checkbox" />
          Eat
          <div>
            <button>Delete</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          Code
          <div>
            <button>Delete</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          Sleep
          <div>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

function AddTodo() {
  return (
    <div className="addtodo">
      <input type="text" placeholder="Add an item" />
      <button>Add</button>
    </div>
  );
}

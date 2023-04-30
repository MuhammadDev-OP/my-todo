"use client";

import { useState } from "react";

export default function Home() {
  const [Todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([""]);

  function HandleInputTodo(event: any) {
    setTodo(event.target.value);
  }

  function addTodolist() {
    setTodoList([...todoList, Todo]);
    setTodo("");
  }

  return (
    <>
      <div className="bg-teal-500 p-2">
        <h1 className="text-2xl">Welcome to todo App!</h1>
        <div>
          <input
            type="text"
            className="mt-3"
            value={Todo}
            onChange={HandleInputTodo}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={addTodolist}
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {todoList.map((todo: any) => (
          <>
            <input
              type="checkbox"
              name="check-box"
              id=""
              className="h-5 w-5 m-3 "
            />
            <label className="text-green-400 text-2xl font-extrabold">
              {todo}
            </label>
            <br />
          </>
        ))}
      </div>
    </>
  );
}

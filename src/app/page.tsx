"use client";

import { useState } from "react";

export default function Home() {
  const [Todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([""]);

  // let event: any = null;

  // let InputTxt: any = HandleInputTodo(event?.target.value);

  function HandleInputTodo(event: any) {
    setTodo(event.target.value);
  }

  const addTodolist = () => {
    if (Todo === "") {
      alert("Todo is Null You F***in Idiot");
    } else {
      setTodoList([...todoList, Todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index:any) => {
    const updatedTodolist = [...todoList];
    updatedTodolist.splice(index, 1);
    setTodoList(updatedTodolist);
  };

  // const CheckboxClick  = (index: any) => {
    
  //   const updatedTodolist = [...todoList];
  //   updatedTodolist[index].checked = !updatedTodolist[index].checked;



  // }

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
        {todoList.map((todo: any, index) => (
          <>
            <input 
              key={index}
              type="checkbox"
              name="check-box"
              id=""
              // checked={todo.checked}
             // disabled={todo.disabled}
             // onChange={() => CheckboxClick(index)}
              className="h-5 w-5 m-3 "
            />
            <label className="text-green-400 text-2xl font-extrabold">
              {todo}
            </label>
            <button
            key={index}
              type="submit"
              className="ml-3 px-2 py-1 bg-rose-500 text-white font-bold rounded hover:stroke-slate-800 hover:bg-blue-400 hover:text-black"
              onClick={() => deleteTodo(index) }> Delete </button>
            <br />
          </>
        ))}
      </div>
    </>
  );
}

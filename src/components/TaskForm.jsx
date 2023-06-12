import React, { useState, useEffect, useContext } from "react";
import { tasks } from "../data/tasks";
import { TaskContext } from "../context/TaskContext";
import reactSvg from '../assets/react.svg'


function TaskForm() {
  //App.jsx nos pasa como prop la funcion createTask
  // import * as bootstrap from 'bootstrap'
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); //Trae los elementos del TaskContextProvider, se establecen en una variable

  const handleSubmit = (e) => {
    e.preventDefault(); //Cancela recargar página
    if(title&&description){

      //Le pasamos los States (estados), que son como variables, y contienen la información de los inputs
      createTask({
        title: title,
        description: description,
      });
  
      //Reinicar los inputs
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-3">
          <h1 className="flex-auto text-2xl mx-0 font-bold text-white ">Crea tu tarea</h1>
          <img className="h-8" src={reactSvg} alt="React-logo" />
        </div>

        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe algo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title} //Limpiar valor
          autoFocus //Hacer foco en este input al cargar pag.
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;

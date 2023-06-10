import React, {useState, useEffect} from 'react'
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data} from './data/tasks'
export function App(){ 

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className="container mx-auto p-10">
        <TaskForm></TaskForm>{/*Formulario*/}   
        <TaskList></TaskList>{/*Lista con tareas*/}
      </div>
    </main> 
  )
}

export default App

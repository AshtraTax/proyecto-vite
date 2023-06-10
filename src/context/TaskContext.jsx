import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
//Variable TextContent()
export const TaskContext = createContext();

//Modulo TextContext
export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]); //Al principio se le pasa una arreglo vacio.

  function createTask(task) {
    //nombre del argumento
    //copiar todos los elementos y añadir otro.

    // console.log(tasks.length)
    setTasks([
      ...tasks,
      {
        //Hace auto-return
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    //Se ejecuta cuando el TaskContextProvider es ejecutado
    setTasks(data);
  }, []);

  return (
    // TextContent con la propiedad .provider
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

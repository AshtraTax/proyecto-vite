import { useContext } from "react";
import { TaskContext, TaskContextProvider } from "../context/TaskContext";

function TaskCard({ task }) {
  //Traigo la funcion deleTasks que se encuentra en el TaskContextProvider
  const { deleteTask } = useContext(TaskContext);
  // function deleteTask(){
  //   // console.log(task)

  return (
    <div className="bg-gray-800 p-2 rounded-md text-white">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
export default TaskCard;

import React, {useContext, useState, useEffect} from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'

// console.log(tasks)
function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext)
  if (tasks.length === 0){
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>
  }
  return (
    <div className='grid grid-cols-4 gap-2'>{
        tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
        ))}
    </div>
  )
}

export default TaskList
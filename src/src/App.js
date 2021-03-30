import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'write novel',
      day: 'April 1, 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'edit other people work',
      day: 'April 2, 2021',
      reminder: true,

    },
  ])


  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id, task);
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    //console.log('delete ', id)
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    //console.log(id)
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
        /> : 'Way to go! No tasks to do. :-)'
      }
    </div>
  )
}

export default App;

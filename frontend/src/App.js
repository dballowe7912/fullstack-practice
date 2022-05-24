import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

const App = (props) => {

  const [ data, setData ] = useState([])
  const [ dataLength, setDataLength ] = useState(data.length)

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
    .then(res => {
      setData([...res.data])
    })
    .catch(function (error) {
      console.log(error)
    })
  },[dataLength])

  const toggleTaskCompleted = (id) => {
    console.log(data[0])
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`).then(setDataLength(dataLength - 1))
  }


  const tasksList = data.map((task) => (
    <Todo
      name={task.name}
      completed={task.completed}
      id={task._id}
      key={task._id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ))

  const addTask = async (name) => {
    const newTask = {name}
    await axios.post("http://localhost:5000/api/tasks", newTask)
    setDataLength(dataLength + 1)
  }

  const taskCount = data.length
  const tasksNoun = taskCount !== 1 ? 'tasks' : 'task'
  const headingText = `${taskCount} ${tasksNoun} remaining`

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton key='all' name='All'/>
        <FilterButton key='active' name='Active'/>
        <FilterButton key='completed' name='Completed'/>
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {tasksList}
      </ul>
    </div>
  )
}

export default App

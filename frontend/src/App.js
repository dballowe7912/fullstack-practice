import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

const App = (props) => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
    .then(res => {
      setData([...res.data])
    })
    .catch(function (error) {
      console.log(error)
    })
  }, [])

  const tasksList = data.map((task) => (
    <Todo
      name={task.name} 
      completed={task.completed} 
      id={task.id} 
      key={task.id}
    />
    )
  )

  const addTask = (name) => {
    console.log(name)
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton key='all' name='All'/>
        <FilterButton key='active' name='Active'/>
        <FilterButton key='completed' name='Completed'/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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

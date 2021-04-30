import { useState } from 'react'
import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task1",
      day: "Friday 5th May 2020",
      reminder: true
    },
    {
      id: 2,
      text: "task2",
      day: "Monday 10th Jun 2020",
      reminder: true
    }, {
      id: 3,
      text: "task3",
      day: "Sunday 15th Nov 2020",
      reminder: false
    },
    {
      id: 4,
      text: "task4",
      day: "Saturday 25th Jan 2021",
      reminder: false
    }
  ]);
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Date.now() / 1000);
    setTasks([...tasks, {id, ...task}]);
  }

  // Delete task
  const deleteTask  = (id) => {
    setTasks(tasks.filter((task)=>(task.id !== id)));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
       task.id === id ?
         {...task, reminder: !task.reminder}
        : task
    ));
  }

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask}/>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
        <h3>No tasks to show...</h3>
      }

    </div>
  );
}

export default App;

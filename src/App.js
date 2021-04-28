import { useState } from 'react'
import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "task1",
      reminder: true
    },
    {
      id: 2,
      name: "task2",
      reminder: true
    }, {
      id: 3,
      name: "task3",
      reminder: false
    },
    {
      id: 4,
      name: "task4",
      reminder: false
    }
  ]);

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
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
        <h3>No tasks to show...</h3>
      }

    </div>
  );
}

export default App;

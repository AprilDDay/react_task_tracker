import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const name = "April"
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Upload to Github',
            day: 'April 2nd at 3:00 pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Submit paper',
            day: 'April 1st at 2:00 pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Get bread',
            day: 'March 30th at 1:00 pm',
            reminder: false,
        },
    ]
    
) 

  return (
    <div className="container">
      <h1 style={{ color: 'white', backgroundColor: 'black'}}>Hello {name}</h1>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

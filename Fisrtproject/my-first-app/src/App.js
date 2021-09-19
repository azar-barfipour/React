import {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks,setTasks]= useState(
    [
        {
            id : 1,
            text : 'meeting',
            day : '16 feb',
            reminder : true
        },
        {
            id : 2,
            text : 'appointment',
            day : '17 feb',
            reminder : true
        },
        {
            id : '3',
            text : 'go for a door knocking',
            day : '18 feb',
            reminder : false
        }
    ]
)
  return(
    <div className='container'>
      <Header title='Hello World'/>
      <Tasks tasks= {tasks}/>
    </div>
  );
}

export default App;

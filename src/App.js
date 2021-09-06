import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from "axios";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";



const App = () => {
  //we can add expressions here above the return
  const [showAddTask, setShowAddTask] = useState(false)
 
  
  // DATA For with db.Json as backend ==========================
  const [tasks, setTasks] = useState([ ]);
  // const [updatedtasks, setUpdatedtasks] = useState([ ]);

  useEffect(() => {
    const getTasks = async () => {
      // const tasksFromServer = await fetchTasks();
      // const objToArry = Object.values(tasksFromServer);
      // setTasks(objToArry);

      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      
      // const taskToToggle = await fetchTask('612cf21fca634f20c4d1c84b');
      // setUpdatedtasks(taskToToggle);

    }

    getTasks()
    
  }, [tasks])
  //console.log(tasks); //to see whats inside our useState task
  //console.log(Array.isArray(tasks.TASKS)) //to see if its an array, it's not btw, it's an 
  // const objToArry = Object.entries(tasks);
  // console.log(updatedtasks); //to see updated tasks
  
  
  // Fetch Tasks
  const url = 'http://localhost:3001/api/tasks';
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data); //shows that we got the data

    return data;
  }

  // Fetch Task
  // const fetchTask = async (_id) => {
  //   const res = await axios.get(`http://localhost:3001/api/tasks/${_id}`)
  //   // const data = await res.json()

  //   return res
  // }

  // Add Task
  // With express backend ==================================
  const addTask = async (task) => {
    
    //made a new obj to send on post
    const newTask ={
        text: task.text,
        day: task.day,
        reminder: task.reminder,
    }
    //sends the new task obj to the address
    axios
    .post('http://localhost:3001/api/tasks/addTask', newTask)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  // Delete Task
  const deleteTask = async (_id) => {
    axios.delete('http://localhost:3001/api/tasks/delete/'+_id);
  }

  // Toggle Reminder ==================================================================
  const toggleReminder = async (task) => {
    // Getting the task data
    // const taskToToggle = await tasks.TASKS.findOne({_id: _id});
    // const taskToToggle = await fetchTask(_id);
    // setUpdatedtasks(taskToToggle);
    
    // Updating the task into a variable, recreate all data on update
    const newUpdatedTask = { 
      text: task.text,
      day: task.day,
      reminder: !task.reminder, 
    }
    

    axios.put('http://localhost:3001/api/tasks/toggle/'+task._id, newUpdatedTask);
  }
  

  return (
    <Router>
      {/* // only returns single Element, so put them inside here */}
      <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask &&
              <AddTask onAdd={addTask} />
            }
            {tasks.TASKS && tasks.TASKS.length > 0 ? 
            (
              <Tasks tasks={tasks.TASKS} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                  'No Tasks To Show.'
                )
        
            }
            
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer  />
      </div>
    </Router>
  );
}

export default App;







// ==========================================================================================================================





// const App = () => {
//   //we can add expressions here above the return
//   const [showAddTask, setShowAddTask] = useState(false)
  
//   // DATA For with db.Json as backend ==========================
//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks()
//       setTasks(tasksFromServer)
//     }

//     getTasks()

//   }, [])

//   // Fetch Tasks
//   const fetchTasks = async () => {
//     const res = await fetch('http://localhost:5000/tasks')
//     const data = await res.json()

//     return data
//   }

//   // Fetch Task
//   const fetchTask = async (id) => {
//     const res = await fetch(`http://localhost:5000/tasks/${id}`)
//     const data = await res.json()

//     return data
//   }

//   // Add Task
//   // With db.Json ==================================
//   const addTask = async (task) => {
//    const res = await fetch('http://localhost:5000/tasks', {
//      method: 'POST',
//      headers: {
//        'Content-type': 'application/json'
//      },
//      body: JSON.stringify(task)
//    })

//    const data = await res.json()

//    setTasks([...tasks, data])

//   }

//   // Delete Task
//   // With db.Json
//   const deleteTask = async (id) => {
//       await fetch(`http://localhost:5000/tasks/${id}`, {
//         method: 'DELETE'
//       })

//       setTasks(tasks.filter((task) => task.id !==id))
//     }

//   // Toggle Reminder
//   // With db.Json
//   const toggleReminder = async (id) => {
//     // Getting the task data
//     const taskToToggle = await fetchTask(id)
//     // Updating the task into a variable
//     const updatedTask = { ...taskToToggle,
//     reminder: !taskToToggle.reminder }

//     const res = await fetch(`http://localhost:5000/tasks/${id}`,{
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(updatedTask)
//     })

//     const data = await res.json()
    
//     setTasks(tasks.map((task) => 
//       task.id === id ? { ...task, reminder:data.reminder } : task
//         )
//       )
//   }

//   return (
//     <Router>
//       {/* // only returns single Element, so put them inside here */}
//       <div className="container">
//         <Header 
//           onAdd={() => setShowAddTask(!showAddTask)} 
//           showAdd={showAddTask}
//         />
//         <Route path='/' exact render={(props) => (
//           <>
//             {showAddTask &&
//               <AddTask onAdd={addTask} />
//             }
//             {tasks.length > 0 ? 
//             (
//               <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
//             ) : (
//                   'No Tasks To Show.'
//                 )
        
//             }
//           </>
//         )} />
//         <Route path='/about' component={About} />
//         <Footer  />
//       </div>
//     </Router>
//   );
// }

// export default App;

// ====================NOTE=====================
// To build the entire app type on terminal: npm run build
// Then it's gonna create a folder named build which is gonna be your static assets
// This is the folder you will deploy, what you push to production
// Only the build folder no need for other folder such as component, node_modules, etc.
// Those are your development stuff

// To try it locally you can install npm serve to serve package globally
// After building the app, type in Terminal: npm i -g serve
// Then: serve -s build -p <any port ex: 8000>
// When you go to localhost:8000, you'll see your app
// You can delete the production folders now and still see it running






// TO RUN WITH JSON
// Open 2 terminals
// 1st terminal: npm run server (for json)
// 2nd terminal: npm start  (for app)







// =====this was inside App div=========
   /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// ========================================

// =======this was the import=========
// import logo from './logo.svg';
// import './App.css';
// ======================================
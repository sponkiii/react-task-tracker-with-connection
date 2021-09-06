import Task from "./Task"
const Tasks = ( { tasks, onDelete, onToggle } ) => {
    
    // tasks = Array.prototype.slice.call(tasks);
    // // or
    // tasks = [].slice.call(tasks);
    // // or
    // tasks = Array.from(tasks);
    // console.log("eto");
    // const TASKS = tasks;
    // console.log(TASKS);
    // tasks.map((task) =>(
    //     console.log("single task ",task)
    // ))
    return (
        <>
            {tasks.map( (task, index) => 
            (
             <Task 
                key={index}    // key={task.id} for no db.json, remove index on parameters
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}
             />
            )
            )}
        </>
    )
}

export default Tasks



// import Task from "./Task"
// const Tasks = ( { tasks, onDelete, onToggle } ) => {
//     return (
//         <>
//             {tasks.map( (task, index) => 
//             (
//              <Task 
//                 key={index}    // key={task.id} for no db.json, remove index on parameters
//                 task={task} 
//                 onDelete={onDelete} 
//                 onToggle={onToggle}
//              />  
//             ))}
//         </>
//     )
// }

// export default Tasks
// Stopped at 44:06 npm start
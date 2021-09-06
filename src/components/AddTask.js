import { useState } from "react"
// import axios from "axios";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        //prevents refreshing page
        e.preventDefault()
        // //made a new obj to send on post
        // const newTask ={
        //     text: text,
        //     day: day,
        //     reminder: reminder,
        // }

        if(!text){
            alert('Please add a task')
            return
        }

        // puts values to useState
        onAdd({ text, day, reminder })

        //resets form
        setText('')
        setDay('')
        setReminder(false)
        
        // //sends the new task obj to the address
        // axios
        //     .post('http://localhost:3001/api/tasks/addTask', newTask)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        // console.log(text, day, reminder)
        // console.log(newTask)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>
                    Task
                </label>
                <input type='text' placeholder='AddTask' 
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>
                    Day & Time
                </label>
                <input type='text' placeholder='Add Day & Time' 
                    value={day} onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>
                    Set Reminder
                </label>
                <input type='checkbox' checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form >
    )
}

export default AddTask






// import { useState } from "react"

// const AddTask = ({ onAdd }) => {
//     const [text, setText] = useState('')
//     const [day, setDay] = useState('')
//     const [reminder, setReminder] = useState(false)

//     const onSubmit = (e) => {
//         //prevents refreshing page
//         e.preventDefault()
        

//         if(!text){
//             alert('Please add a task')
//             return
//         }

//         // puts values to useState
//         onAdd({ text, day, reminder })

//         //resets form
//         setText('')
//         setDay('')
//         setReminder(false)
//     }

//     return (
//         <form className='add-form' onSubmit={onSubmit}>
//             <div className='form-control'>
//                 <label>
//                     Task
//                 </label>
//                 <input type='text' placeholder='AddTask' 
//                     value={text} onChange={(e) => setText(e.target.value)}
//                 />
//             </div>
//             <div className='form-control'>
//                 <label>
//                     Day & Time
//                 </label>
//                 <input type='text' placeholder='Add Day & Time' 
//                     value={day} onChange={(e) => setDay(e.target.value)}
//                 />
//             </div>
//             <div className='form-control form-control-check'>
//                 <label>
//                     Set Reminder
//                 </label>
//                 <input type='checkbox' checked={reminder}
//                     value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
//                 />
//             </div>
//             <input type='submit' value='Save Task' className='btn btn-block' />
//         </form >
//     )
// }

// export default AddTask

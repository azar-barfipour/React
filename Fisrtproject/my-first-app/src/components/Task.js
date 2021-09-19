const Task = (props) => {
    return (
        <div className='task'>
            <h3>{props.task.text}</h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task

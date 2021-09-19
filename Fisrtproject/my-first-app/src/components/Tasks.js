const tasks = [
    {
        id: 1,
        text: 'Doctors appointment',
        day: '15 feb 2021',
        reminder: true
    },
    {
        id: 2,
        text: 'meeting',
        day: '16 feb 2021',
        reminder: true
    },
    {
        id: 3,
        text: 'Door Knocking',
        day: '17 feb 2021',
        reminder: true
    }
]

const Tasks = () => {
    return(
    <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>)
    )} 
    </>
    )
}
  
export default Tasks;
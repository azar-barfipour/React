import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const addMeetupHandler =(meetupData)=>{
   console.log(meetupData);
}
const NewMeetup = () =>{
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default NewMeetup

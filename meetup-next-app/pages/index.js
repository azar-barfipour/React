import MeetupList from '../components/meetups/MeetupList'
const DUMMI = [{
    id: 'm1',
    title: 'My first meenup',
    image: 'https://source.unsplash.com/200x200/?buildings',
    address: '355 Holdom, some City',
    description: "my first desc"
},{
    id: 'm2',
    title: 'My second meenup',
    image: 'https://source.unsplash.com/200x200/?buildings',
    address: '550 Holdom, some City',
    description: "my second desc"
}]
const Meetup = () =>{
    return <MeetupList meetups={DUMMI}/>
}
export default Meetup
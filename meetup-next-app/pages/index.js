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
const HomePage = (props) =>{
    return <MeetupList meetups={props.meetups}/>
}
export async function getStaticProps(){
// fetch data
return{
    props: {
        meetups : DUMMI
    },
    revalidate: 10
}
}
export default HomePage
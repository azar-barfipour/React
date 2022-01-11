import { useRouter } from "next/router"
import MeetupDetail from "../../components/meetups/MeetupDetail"
const MeetupDetails = () => {
    const router = useRouter();
    router.query.meetupId;
    return <MeetupDetail image='https://source.unsplash.com/200x200/?buildings' title='first one' description="my first one"/>
}
export default MeetupDetails
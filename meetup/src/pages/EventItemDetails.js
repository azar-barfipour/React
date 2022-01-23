import classes from "./EventItemDetails.module.css";
import { useState, useCallback, useEffect, useContext } from "react";
import { useParams, Route } from "react-router-dom";
import EventItemsDetail from "../components/Search/EventItemsDetail";
import Comment from "../components/Comment/Comment";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../store/auth-context";

const EventItemDetails = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;
  const params = useParams();
  const [groups, setGroups] = useState([]);
  const [isDesabled, setIsDesabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://recat-meetup-project-default-rtdb.firebaseio.com/groups/${params.eventDetailId}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        let loadedData = [];
        loadedData.push({
          title: data.title,
          date: data.date,
          description: data.description,
          location: data.location,
        });
        setGroups(loadedData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGroups();
  }, []);

  const groupsCopy = [...groups];
  const [newGroup] = groupsCopy;
  console.log(newGroup);
  async function addEventForUserHandler(event) {
    // console.log(groups);
    event.preventDefault();
    const response = await fetch(
      "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        body: JSON.stringify({
          token: token,
          id: newGroup.key,
          title: newGroup.title,
          location: newGroup.location,
          description: newGroup.description,
          date: newGroup.date,
          userId: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setIsDesabled(true);
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json"
      );
      const data2 = await res.json();
      console.log(data2);
      let loadedData2 = [];
      for (const key in data2) {
        loadedData2.push({
          id: key,
          userId: data2[key].userId,
          isAdded: data2[key].isAdded,
          title: data2[key].title,
          description: data2[key].description,
          location: data2[key].location,
        });
      }
      const filterData = [...loadedData2];
      console.log(userId);
      const fliterdedData = filterData.filter((data) => {
        return data.userId === userId;
      });
      console.log(fliterdedData);
      for (const data of fliterdedData) {
        console.log("newGroup", newGroup);
        if (!newGroup) {
          return;
        }
        if (data.title === newGroup.title) {
          setIsDesabled(true);
        }
      }
    };
    fetchEvent();
  }, [newGroup]);

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  };
  // const displayDate = new Intl.DateTimeFormat('en-US',options).format(new Date(groups.date));
  // console.log(displayDate);
  // console.log(new Intl.DateTimeFormat('en-US', options).format(date))

  return (
    <div className={classes.datail}>
      <ul>
        {groups.map((group) => {
          return (
            <EventItemsDetail
              key={group.id}
              title={group.title}
              date={group.date}
              location={group.location}
              description={group.description}
            />
          );
        })}
      </ul>
      <section className={classes["comment-wrapper"]}>
        <h2 className={classes["comment__title"]}>Comments</h2>
        <Route path="/Explore/:eventDetailId">
          <Comment />
        </Route>
      </section>
      <section className={classes["event-attend"]}>
        <div className={classes["attend-button__wrapper"]}>
          <button
            disabled={isDesabled}
            className={`${classes["attend-button"]} ${
              isDesabled ? classes["attend-button--active"] : ""
            }`}
            type="submit"
            onClick={addEventForUserHandler}
          >
            Attend
          </button>
        </div>
      </section>
    </div>
  );
};
export default EventItemDetails;

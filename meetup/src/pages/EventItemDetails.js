import classes from "./EventItemDetails.module.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Route, Routes, Link } from "react-router-dom";
import EventItemsDetail from "../components/Search/EventItemsDetail";
import Comment from "../components/Comment/Comment";
import AuthContext from "../store/auth-context";

const EventItemDetails = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;
  const params = useParams();
  const [groups, setGroups] = useState([]);
  const [isDesabled, setIsDesabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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

  async function addEventForUserHandler(event) {
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
    setIsDesabled(true);
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json"
      );
      const data2 = await res.json();
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
      const fliterdedData = filterData.filter((data) => {
        return data.userId === userId;
      });
      for (const data of fliterdedData) {
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

  return (
    <div className={classes.datail}>
      <ul>
        {groups.map((group) => {
          return (
            <EventItemsDetail
              key={group.id}
              id={group.id}
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
        <Comment />
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

import classes from "./EventItemDetails.module.css";
import { useState, useCallback, useEffect, useContext } from "react";
import { useParams, Route } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../store/auth-context";

const EventItemsDetails = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;
  console.log(userId);
  console.log(token);
  const params = useParams();
  const [groups, setGroups] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      setIsActive(false);
      // setRefresh(false);
      setError(null);

      try {
        const response = await fetch(
          `https://recat-meetup-project-default-rtdb.firebaseio.com/groups/${params.eventDetailId}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        setGroups(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGroups();
  }, []);
  async function addEventForUserHandler(event) {
    setIsActive(true);
    // localStorage.setItem('refresh',refresh);
    event.preventDefault();
    const response = await fetch(
      "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        body: JSON.stringify({
          token: token,
          title: groups.title,
          location: groups.location,
          description: groups.description,
          date: groups.date,
          userId: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  // useEffect(() => {
  //   setRefresh(JSON.parse(window.localStorage.getItem('isActive')));
  // }, []);
  // setRefresh(JSON.parse(window.localStorage.getItem('isActive')));
  // console.log(refresh);
  // console.log(isActive);
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
      <li className={classes["detail__item"]}>
        {/* <p>{params.groupDetailId}</p> */}
        <img
          src="https://source.unsplash.com/200x130/?party"
          className={classes["detail__img"]}
        />
        <section className={classes["detail-wrapper"]}>
          <h5 className={classes["detail__title"]}>{groups.title}</h5>
          <div className={classes["detail-wrapper__date"]}>
            <FontAwesomeIcon icon={faCalendar} />
            <p className={classes["detail__date"]}>{`${new Date(
              groups.date
            ).getFullYear()}-${new Date(groups.date).getMonth()}-${new Date(
              groups.date
            ).getDate()}  ${new Date(groups.date).getHours()}:${new Date(
              groups.date
            ).getMinutes()}`}</p>
          </div>
          <div className={classes["detail-wrapper__location"]}>
            <FontAwesomeIcon icon={faLocationArrow} />
            <p className={classes["detail__location"]}>{groups.location}</p>
          </div>
          <h3>About</h3>
          <p className={classes["detail__desc"]}>{groups.description}</p>
        </section>
      </li>
      <section className={classes["comment-wrapper"]}>
        <h2 className={classes["comment__title"]}>Comments</h2>
        <Route path="/Explore/:eventDetailId">
          <Comment />
        </Route>
      </section>
      <section className={classes["event-attend"]}>
        <div className={classes["attend-button__wrapper"]}>
          <button
            disabled={isActive}
            className={`${classes["attend-button"]} ${
              isActive ? classes["attend-button--active"] : ""
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
export default EventItemsDetails;

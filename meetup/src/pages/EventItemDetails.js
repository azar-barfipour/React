import classes from "./EventItemDetails.module.css";
import { useState, useCallback, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EventItemsDetails = () => {
  const params = useParams();
  const [groups, setGroups] = useState([]);
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
        setGroups(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGroups();
  }, []);

  return (
    <div className={classes.datail}>
        <li className={classes['detail__item']}>
          {/* <p>{params.groupDetailId}</p> */}
          <img src="https://source.unsplash.com/200x130/?party" className={classes['detail__img']}/>
          <section className={classes['detail-wrapper']}>
          <h5 className={classes['detail__title']}>{groups.title}</h5>
          <div className={classes['detail-wrapper__date']}>
          <FontAwesomeIcon icon={faCalendar}/>
          <p className={classes['detail__date']}>{groups.date}</p>
          </div>
          <div className={classes['detail-wrapper__location']}>
          <FontAwesomeIcon icon={faLocationArrow}/>
          <p className={classes['detail__location']}>{groups.location}</p>
          </div>
          <h3>About</h3>
          <p className={classes['detail__desc']}>{groups.description}</p>
          </section>
        </li>
        <section className={classes['comment-wrapper']}>
        <h2 className={classes['comment__title']}>Comments</h2>
      <Route path="/Explore/:eventDetailId">
        <Comment />
      </Route>
      </section>
    </div>
  );
};
export default EventItemsDetails;
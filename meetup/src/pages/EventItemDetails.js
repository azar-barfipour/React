import classes from "./EventItemDetails.module.css";
import { useState, useCallback, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { Link } from "react-router-dom";

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
          <h5 className={classes['detail__title']}>{groups.title}</h5>
          <p className={classes['detail__desc']}>{groups.description}</p>
        </li>
      <Link
        className={classes.btn}
        to={`/Explore/${params.eventDetailId}/Comment`}
      >
        Comment
      </Link>
      <Route path="/Explore/:eventDetailId/Comment">
        <Comment />
      </Route>
    </div>
  );
};
export default EventItemsDetails;

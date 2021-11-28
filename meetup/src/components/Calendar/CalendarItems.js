import { useContext, Fragment } from "react";
import classes from "./CalendarItems.module.css";
import AuthContext from "../../store/auth-context";
import CalendarItem from "./CalendarItem";
import CalendarDate from "./CalendarDate";

const CalendarItems = (props) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <Fragment>
      <div className={classes.calendar}>
        <div className={classes.header}>
          {isLoggedIn ? (
            <h4>Your calendar</h4>
          ) : (
            <div className={classes["header-wrapper"]}>
              <div>
                <h1>Dive in! There are so many things to do on Meetup</h1>
                <p>
                  Make friends, find support, grow a business, and explore your
                  interests. Thousands of events are happening every day, both
                  online and in person!
                </p>
              </div>
              <div>
                <img src="https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=640&q=75"></img>
              </div>
            </div>
          )}
        </div>
        <ul className={classes.calendarItemes}>
          {props.items.map((item) => {
            return (
              <CalendarItem
                key={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
export default CalendarItems;

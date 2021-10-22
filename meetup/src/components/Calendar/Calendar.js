import react, { Fragment } from "react";
import classes from "../Calendar/Calendar.module.css";
import CalendarItems from "./CalendarItems";
const Calendar = () => {
  const calendarItemes = [
    {
      id: "c1",
      title: "Dance Club",
      description: "Having fun and dancing in a great area",
    },
    {
      id: "c2",
      title: "English Conversation",
      description: "an online event for speaking in English",
    },
    {
      id: "c3",
      title: "Persian Dance",
      description: "Art gallery with great DJs",
    },
  ];
  return (
    <Fragment>
      <div className={classes.calendar}>
        <div>
          <h4>Your Calendar</h4>
        </div>
        {calendarItemes.map((calendarIteme) => {
          return (
            <CalendarItems
              title={calendarIteme.title}
              dec={calendarIteme.description}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Calendar;

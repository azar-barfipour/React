import react, { Fragment } from "react";
import classes from "../Calendar/Calendar.module.css";
import CalendarItems from "./CalendarItems";
const Calendar = () => {
  const calendarItemes = [
    {
      id: "c1",
      title: "Dance Club",
      description: "Having fun and dancing in a great area",
      date: new Date(1990, 12, 2, 12, 30),
    },
    {
      id: "c2",
      title: "English Conversation",
      description: "an online event for speaking in English",
      date: new Date(2020, 12, 5, 13, 20),
    },
    {
      id: "c3",
      title: "Persian Dance",
      description: "Art gallery with great DJs",
      date: new Date(2021, 8, 7, 16, 40),
    },
  ];
  return (
    <Fragment>
      <div className={classes.calendar}>
        <div>
          <h4>Your Calendar</h4>
        </div>
        <ul className={classes.calendarItemes}>
          {calendarItemes.map((calendarIteme) => {
            return (
              <CalendarItems
                key={calendarIteme.id}
                title={calendarIteme.title}
                dec={calendarIteme.description}
                date={calendarIteme.date}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Calendar;

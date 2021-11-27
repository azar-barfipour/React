import classes from "./EventForm.module.css";
import EventItem from "./EventItem";
const EventItems = (props) => {
  return (
    <ul>
      {props.groups.map((groupItem) => {
        return (
          props.groups.length > 0 && (
            <EventItem
              key={groupItem.id}
              id={groupItem.id}
              title={groupItem.title}
              description={groupItem.description}
              // image={groupItem.image}
              image={groupItem.image}
              // onRemove={removeHandler.bind(null, groupItem.id)} //for removing items
              // date={groupItem.date}
            />
          )
        );
      })}
    </ul>
  );
};

export default EventItems;

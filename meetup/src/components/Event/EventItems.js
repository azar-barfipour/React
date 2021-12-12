
import EventItem from "./EventItem";
const EventItems = (props) => {
  return (
    <ul>
      {props.groups.map((groupItem) => {
        return (
          !props.isLoading &&
          props.groups.length > 0 && (
            <EventItem
              key={groupItem.id}
              id={groupItem.id}
              title={groupItem.title}
              description={groupItem.description}
              // image={groupItem.image}
              image={groupItem.image}
              date={groupItem.date}
              location={groupItem.location}
            />
          )
        );
      })}
    </ul>
  );
};

export default EventItems;

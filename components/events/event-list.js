import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;
  let priority = true;
  return (
    <ul className={classes.list}>
      {items.map((event, index) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          priority={index < 2 ? true : false}
        />
      ))}
    </ul>
  );
}

export default EventList;

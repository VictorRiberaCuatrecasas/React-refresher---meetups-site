import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
}

export default MeetupList;

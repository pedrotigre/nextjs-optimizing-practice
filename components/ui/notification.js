import { useContext } from 'react';

// import classes from './notification.module.css';
import NotificationContext from '../../components/context/NotificationContext';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);
  const { title, message, status } = props;

  // if (status === 'success') {
  //   statusClasses = classes.success;
  // }

  // if (status === 'error') {
  //   statusClasses = classes.error;
  // }

  // if (status === 'pending') {
  //   statusClasses = classes.pending;
  // }

  notificationCtx.dispatch({
    type: status,
  });

  const activeClasses = `${notificationCtx.notificationStyle} ${notificationCtx.state}`;

  return (
    // onClick={notificationCtx.hideNotification}
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;

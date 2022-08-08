import { useContext } from 'react';

import classes from './notification.module.css';
import NotificationContext from '../../components/context/NotificationContext';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  let activeClasses = `${classes.notification} ${statusClasses}`;

  if (title === null || message === null || status === null) {
    activeClasses = '';
  }
  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;

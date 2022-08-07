import { useReducer, createContext } from 'react';
import classes from '../ui/notification.module.css';
const NotificationContext = createContext();

const initialState = {
  status: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return classes.success;
    case 'error':
      return classes.error;
    case 'pending':
      return classes.pending;
    default:
      return state;
  }
};

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NotificationContext.Provider
      value={{ state, dispatch, notificationStyle: classes.notification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

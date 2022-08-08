import { useReducer, createContext } from 'react';

const NotificationContext = createContext();

const initialState = {
  title: null,
  message: null,
  status: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'success':
      return { status: 'success', title: 'Success', ...payload };
    case 'error':
      return { status: 'error', title: 'Error', ...payload };
    case 'pending':
      return { status: 'pending', title: 'Pending', ...payload };
    case 'hide':
      return initialState;
    default:
      return state;
  }
};

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hideNotification = () => {
    dispatch({
      type: 'hide',
    });
  };
  return (
    <NotificationContext.Provider value={{ state, dispatch, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

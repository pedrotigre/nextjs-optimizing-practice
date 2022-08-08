import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../context/NotificationContext';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Notification
        title={notificationCtx.state.title}
        message={notificationCtx.state.message}
        status={notificationCtx.state.status}
      />
    </Fragment>
  );
}

export default Layout;

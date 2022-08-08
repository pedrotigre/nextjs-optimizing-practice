import classes from './newsletter-registration.module.css';
import { useRef, useState, useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

function NewsletterRegistration() {
  const { dispatch } = useContext(NotificationContext);
  const emailRef = useRef();
  const [newsletterStatus, setNewsletterStatus] = useState();
  function registrationHandler(event) {
    event.preventDefault();
    let emailValue = emailRef.current.value;
    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailValue),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!!');
        });
      })
      .then((data) => {
        setNewsletterStatus(data.message);
        dispatch({
          type: 'success',
          payload: {
            message: data.message,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'error',
          payload: {
            message: error.message,
          },
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      {(!newsletterStatus && (
        <form onSubmit={registrationHandler}>
          <div className={classes.control}>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              ref={emailRef}
            />
            <button>Register</button>
          </div>
        </form>
      )) || (
        <p className="center">
          <strong>{newsletterStatus}</strong>
        </p>
      )}
    </section>
  );
}

export default NewsletterRegistration;

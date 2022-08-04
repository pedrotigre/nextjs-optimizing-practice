import { useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

import LoadingIcon from '../icons/loading-svg';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [formMessage, setFormMessage] = useState();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.error) {
            setError(true);
            return setComments([]);
          }
          setComments(data.comments);
        });
    }
  }, [showComments]);

  async function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        setShowComments(false);
        setFormMessage(data.message);
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {(!formMessage && showComments && (
        <NewComment eventId={eventId} onAddComment={addCommentHandler} />
      )) || (
        <p>
          <strong>{formMessage}</strong>
        </p>
      )}
      {error && (
        <p>
          <strong>Something went wrong!</strong>
        </p>
      )}
      {isLoading ? (
        <LoadingIcon />
      ) : (
        showComments && <CommentList comments={comments} />
      )}
    </section>
  );
}

export default Comments;

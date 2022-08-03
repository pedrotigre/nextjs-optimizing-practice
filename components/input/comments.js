import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId, comments } = props;

  const [showComments, setShowComments] = useState(false);
  const [formMessage, setFormMessage] = useState();

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => setFormMessage(data.message));
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
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;

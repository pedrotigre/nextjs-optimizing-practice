import classes from './comment-list.module.css';

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.comments.map((item, index) => {
        return (
          <li key={index}>
            <p>{item.comment.text}</p>
            <div>
              By <address>{item.comment.name}</address>
            </div>
          </li>
        );
      })}
      {/* <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li> */}
    </ul>
  );
}

export default CommentList;

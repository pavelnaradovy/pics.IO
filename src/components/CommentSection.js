import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { init, removeById, add } from "../store/redusers/commentSlice";
import styles from "./comments.module.sass";

const Comments = () => {
  const comments = useSelector((state) => state.commentSlice.comments);

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/comments", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => dispatch(init(response.comments)));
    // .then((response) => dispatch(removeById(1)));
  }, []);

  const onSubmit = () => {
    dispatch(
      add({
        id: comments[comments.length - 1].id + 1,
        body: message,
        postId: 777,
        likes: 0,
      })
    );
    setMessage("");
  };
  return (
    <div>
      <h1>Comments</h1>
      <div className={styles.comments}>
        {comments?.map((e) => {
          return (
            <div key={e.id} className={styles.comment}>
              <img
                alt="123"
                src={`https://ui-avatars.com/api/name=${e.body?.slice(
                  0,
                  1
                )}&background=random`}
              />
              <div className={styles.comment__message}>{e.body}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.line}>
        <input
          placeholder="Text your message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button onClick={message.length > 1 ? onSubmit : () => {}}>Send</button>
      </div>
    </div>
  );
};
export default Comments;

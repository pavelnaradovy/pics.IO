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
    const text = localStorage.getItem("text");

    if (text) {
      setMessage(text);
    }

    fetch("https://dummyjson.com/comments", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => dispatch(init(response.comments)));
  }, []);

  useEffect(() => {
    const scroll = localStorage.getItem("scroll");

    if (scroll) {
      console.log(111, parseInt(scroll, 10));

      window.scrollTo(400, parseInt(scroll, 10));
    }
  }, [comments]);

  document.addEventListener("scroll", (event) => {
    const lastKnownScrollPosition = window.scrollY;
    localStorage.setItem("scroll", lastKnownScrollPosition);
  });

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
    localStorage.removeItem("text");
  };

  return (
    <div>
      <h1>Comments</h1>
      <div className={styles.comments} id="comment">
        {comments?.map((e) => {
          return (
            <div key={e.id} className={styles.comment}>
              <svg
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  dispatch(removeById(e.id));
                }}
                viewBox="0 0 1792 1792"
              >
                <path
                  d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4
	c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1
	c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
                />
              </svg>
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
          onChange={(e) => {
            setMessage(e.currentTarget.value);
            localStorage.setItem("text", e.currentTarget.value);
          }}
        />
        <button onClick={message.length > 1 ? onSubmit : () => {}}>Send</button>
      </div>
    </div>
  );
};
export default Comments;

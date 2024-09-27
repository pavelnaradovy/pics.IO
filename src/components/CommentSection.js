import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { init, removeById } from "../store/redusers/commentSlice";

const Comments = () => {
  const comments = useSelector((state) => state.commentSlice.comments);

  const dispatch = useDispatch();

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

  return (
    <div>
      <h1>Comments</h1>
      <cdiv>
        {comments?.map((e) => {
          return <div>{e.id}</div>;
        })}
      </cdiv>
    </div>
  );
};
export default Comments;

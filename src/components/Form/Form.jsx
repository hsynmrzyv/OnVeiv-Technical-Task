import "./Form.css";

// Hooks
import { useState, useRef } from "react";

// Components
import Button from "../Button/Button";

const Form = ({ submit }) => {
  const [postId, setPostId] = useState(null);
  const [userId, setUserId] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    submit(postIdRef.current.value, userIdRef.current.value);

    userIdRef.current.value = "";
    postIdRef.current.value = "";
  };

  const postIdRef = useRef();
  const userIdRef = useRef();

  return (
    <form onSubmit={formSubmitHandler} className="appForm">
      <div className="appForm__inputs"></div>
      <input ref={postIdRef} type="text" placeholder="Post ID" />
      <input ref={userIdRef} type="text" placeholder="User ID" />
      <div className="appForm__action"></div>
      <Button>GET</Button>
    </form>
  );
};

export default Form;

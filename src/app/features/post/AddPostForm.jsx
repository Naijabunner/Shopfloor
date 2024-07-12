import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
function AddPostForm() {
  const dispatch = useDispatch();
  const users =useSelector(selectAllUsers)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorchange = (e) => setUserId(e.target.value);
  const onSave = () => {
    if (title && content) {
      dispatch(
        postAdded(title,content,userId)
    )}
    setContent('')
    setTitle('')
  };
  const canSave= Boolean(title) && Boolean(content) && Boolean(userId)
  const userOptions= users.map(user=>(
    <option key={user.id} value={user.id}>
        {user.value}
    </option>
  ))
  return (
    <section>
      <h2>Add a New Post</h2>
      <form action=''>
        <label htmlFor=''>Post Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
        <select name="" id="" onChange={onAuthorchange}>
            <option value=""></option>
            {userOptions}
        </select>
        <label htmlFor=''> Content</label>
        <input type='text' value={content} onChange={onContentChange} />
        <button
          onClick={(event) => {
            event.preventDefault();
            onSave();
          }}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;

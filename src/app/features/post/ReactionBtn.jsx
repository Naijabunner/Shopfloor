import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

import React from "react";

const ReactionBtn = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: "👍",
    Wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className=''
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionBtn;

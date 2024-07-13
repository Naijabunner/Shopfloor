import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import Reactionbtn from "./ReactionBtn";
function PostsList() {

  const posts = useSelector(selectAllPost);
  const orderedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  const renderdPosts = orderedPost.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 1000)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reactionbtn post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Post</h2>
      {renderdPosts}
    </section>
  );
}

export default PostsList;

import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from './postSlice'
import PostAuthor from './postAuthor'
function PostsList() {
    const post = useSelector(selectAllPost)
  const renderdPosts= post.map(post=>(
    <article>
        <h3>
            {post.title}
        </h3>
        <PostAuthor userId={post.userId}/>
        <p>
            {post.content.substring(0,1000 )}
        </p>
    </article>
  ))
    return (
        <section>
            <h2>
                Post
            </h2>
            {renderdPosts}
        </section>
  )
}

export default PostsList
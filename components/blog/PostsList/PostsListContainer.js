import styled from 'styled-components'

import Post from 'components/blog/Post'

const samplePosts = [{ title: 'Hi there' }]
const PostsList = (posts = samplePosts) => (
  <div>
    {posts.map((post, i) => (
      <Post key={i} url="/blog/post/my-post-slug" />
    ))}
  </div>
)

export default PostsList

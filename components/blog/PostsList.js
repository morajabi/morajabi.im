import styled from 'styled-components'

import Post from 'components/blog/Post'

const PostsList = () => (
  <div>
    <Post url="/blog/post/my-post-slug" />
    <Post />
    <Post />
    <Post />
  </div>
)

export default PostsList

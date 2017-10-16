import styled from 'styled-components'

import Post from 'components/blog/Post'

const PostsList = ({ posts = [{ title: 'Hi there', createdAt: '20130208T080910.123', slug: 'hi-there' }] }) => (
  <div>
    {posts.map((post, i) => (
      <Post
        key={i}
        title={post.title}
        createdAt={post.createdAt}
        slug={post.slug}
      />
    ))}
  </div>
)

export default PostsList

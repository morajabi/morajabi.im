import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

import PostsList from 'components/blog/PostsList/PostsList'
import CenterMsg from 'components/blog/PostsList/CenterMsg'

class PostsListContainer extends PureComponent {
  render() {
    const { data: { allPosts, loading, error } } = this.props

    if (loading) {
      return <CenterMsg>
        Loading... <small>(Here's some cookies 🍪🍪)</small>
      </CenterMsg>
    } else if (error) {
      return <CenterMsg>
        Sorry something went wrong. <small>(Here's the error: {error})</small>
      </CenterMsg>
    } else if (allPosts.length === 0) {
      return <CenterMsg>
        😢 I haven't had the time to write here. <small>Try changing filters!</small>
      </CenterMsg>
    }

    return (
      <PostsList posts={allPosts} />
    )
  }
}

const GetAllPosts = gql`query GetAllPosts($filter: PostFilter) {
  allPosts(filter: $filter) {
    slug
    title
    createdAt
  }
}`

export default graphql(GetAllPosts, {
  options: ({ activeTags }) => ({
    variables: {
      filter: activeTags && activeTags.length !== 0 ?
        { tags_some: { name_in: activeTags }} :
        {}
    }
  })
})(PostsListContainer)

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

import PostsList from 'components/blog/PostsList/PostsList'

class PostsListContainer extends PureComponent {
  render() {
    const { data: { allPosts, loading, error } } = this.props

    if (loading) {
      return 'loading ...'
    } else if (error) {
      return `error: ${error}`
    }

    return (
      <PostsList posts={allPosts} />
    )
  }
}

const GetAllPosts = gql`query GetAllPosts {
  allPosts {
    slug
    title
    createdAt
  }
}`

export default graphql(
  GetAllPosts,
)(PostsListContainer)

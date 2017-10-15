import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

import Tags from 'components/blog/Tags/Tags'

class TagsContainer extends PureComponent {
  render() {
    const { data: { allTags, loading, error }, ...props } = this.props

    if (loading) {
      return null
    } else if (error) {
      return `error loading tags: ${error}`
    }

    return (
      <Tags tags={allTags} {...props} />
    )
  }
}

const GetAllTags = gql`query GetAllTags {
  allTags {
    id
    name
  }
}`

export default graphql(
  GetAllTags,
)(TagsContainer)

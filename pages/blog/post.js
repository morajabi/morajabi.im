import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { gql, graphql, compose } from 'react-apollo'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import Error from 'next/error'

import rem from 'utils/rem'
import withData from 'utils/withData'
import { headerFont, bodyFont } from 'utils/fonts'
import { mostlyBlack } from 'utils/colors'
import { mobile } from 'utils/media'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: ${rem(60)} 0;
  box-sizing: border-box;
  background-image: url(/static/backgrounds/sneakers-bg.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${mostlyBlack};
`

const Container = styled.article`
  max-width: ${rem(720)};
  padding: 0 ${rem(15)};
  margin: 0 auto;
`

const Meta = styled.span`
  display: inline-block;
  padding: 0 ${rem(20)};
  margin-bottom: ${rem(30)};
  font-size: ${rem(14)};
  font-weight: 700;
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.9);
`

const Title = styled.h1`
  margin: 0;
  padding: 0 ${rem(10)};
  margin-bottom: ${rem(50)};
  font-family: ${headerFont};
  font-size: ${rem(60)};
  font-weight: 700;
  letter-spacing: ${rem(-2)};
  text-align: center;
  text-shadow:
    ${rem(4)} ${rem(4)} 0 white,
    ${rem(-1)} ${rem(-1)} 0 white,
    ${rem(1)} ${rem(-1)} 0 white,
    ${rem(-1)} ${rem(1)} 0 white,
    ${rem(1)} ${rem(1)} 0 white;

  ${mobile(css`
    font-size: ${rem(40)};
  `)}
`

const CenteredRow = styled.div`
  text-align: center;
`

const edgePadding = 90;
const smallEdgePadding = 25;

const TextArea = styled.div`
  padding: ${rem(60)} 0 ${rem(80)} 0;
  font-family: ${bodyFont};
  font-size: ${rem(19)};
  line-height: 1.4;
  background: rgba(255, 255, 255, 1);
  box-shadow: 15px 15px 0 0 rgba(0, 0 ,0, 0.7);

  ${mobile(css`
    font-size: ${rem(18)};
    padding: ${rem(20)} 0 ${rem(20)} 0;
  `)}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  pre,
  blockquote {
    padding-right: ${rem(edgePadding)};
    padding-left: ${rem(edgePadding)};

    ${mobile(css`
    padding-right: ${rem(smallEdgePadding)};
    padding-left: ${rem(smallEdgePadding)};
    `)}
  }

  ul,
  ol {
    list-style: none;

    li {
      margin-bottom: ${rem(4)};
      padding-left: ${rem(35)};
      text-indent: ${rem(-35)};

      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: ${rem(15)};
        height: ${rem(2)};
        background: #ccc;
        margin-right: ${rem(20)};
      }
    }
  }

  p {
    margin: ${rem(17)} 0;
  }

  blockquote {
    padding-top: ${rem(20)};
    padding-bottom: ${rem(20)};
    margin: 0;
    background: #f4f4f4;

    p {
      padding-right: 0;
      padding-left: 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  pre {
    padding-top: ${rem(5)};
    padding-bottom: ${rem(5)};
    background: #f4f4f4;
  }
`

class PostPageContent extends PureComponent {
  render() {
    const { data: { allPosts, loading, error } } = this.props

    if (loading) {
      return 'loading ...'
    } else if (error) {
      return `error: ${error}`
    } else if (allPosts.length === 0) {
      return <Error status={404} />
    }

    const { title, createdAt, content } = allPosts[0] || {}

    return (
      <Wrapper>
        <Container>
          <CenteredRow>
            <Meta>
              published{' '}
              {distanceInWordsToNow(createdAt, { addSuffix: true })}
            </Meta>
          </CenteredRow>
          <Title>{title}</Title>

          <TextArea dangerouslySetInnerHTML={{ __html: content }}>
          </TextArea>
        </Container>
      </Wrapper>
    )
  }
}

const GetPost = gql`query GetPost($slug: String!) {
  allPosts(filter: {slug: $slug}) {
    slug
    title
    createdAt
    content
  }
}`

const PostPageContentWithData = compose(
  withData,

  graphql(GetPost, {
    options: ({ slug = '' }) => ({
      variables: { slug },
      skip: !slug,
    }),
  })
)(PostPageContent)

export default class PostPage extends PureComponent {
  static async getInitialProps({ query: { slug } }) {
    return { slug }
  }

  render() {
    return <PostPageContentWithData {...this.props} />
  }
}


import styled from 'styled-components'
import Link from 'next/link'

// Local
import Container from '../shared/Container'

const RecentPosts = ({ posts }) => (
  <Container>
    <Wrapper>
      <Title>Recent posts</Title>

      <List>
        {posts.map(({ slug, title }) => (
          <Post key={slug}>
            <Link href={`/blog/${slug}`} passHref>
              <a>{title}</a>
            </Link>
          </Post>
        ))}
      </List>
    </Wrapper>
  </Container>
)

export default RecentPosts

// Styles
const Wrapper = styled.section``

const Title = styled.h2``

const List = styled.ul``

const Post = styled.li``

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
const Wrapper = styled.section`
  margin-top: 60px;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  font-weight: normal;
  font-size: 20px;
  line-height: 1;
  color: #bbb;
`

const List = styled.ul`
  padding: 0;
`

const Post = styled.li`
  position: relative;
  margin-bottom: 20px;
  list-style: none;

  font-size: 22px;
  font-weight: bold;
  line-height: 1.15;
  color: #21506a;

  &:hover {
    color: #000;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 4px);
    left: -22px;
    width: 8px;
    height: 8px;
    background: #e0e0e0;
  }
`

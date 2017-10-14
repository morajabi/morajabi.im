import styled from 'styled-components'

import rem from 'utils/rem'
import Post from 'components/blog/Post'
import Tag from 'components/blog/Tag'

const Wrapper = styled.div`
  height: 100vh;
  padding: ${rem(20)};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${rem(200)} auto;
  grid-column-gap: ${rem(30)};
`

const Posts = styled.div`
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const AboutNote = styled.p`
  margin: 0;
  text-align: right;
  font-size: ${rem(13)};
  opacity: 0.5;
  transition: opacity 100ms ease-out;

  &:hover {
    opacity: 1;
  }
`

const Tags = styled.div`
  padding-top: 1.6rem;
`

const TagWrapper = styled.div`
  text-align: right;
  margin-bottom: ${rem(7)};
`

export default () => (
  <Wrapper>
    <Side>
      <Tags>
        <TagWrapper><Tag>ruby</Tag></TagWrapper>
        <TagWrapper><Tag>js</Tag></TagWrapper>
        <TagWrapper><Tag>design</Tag></TagWrapper>
      </Tags>
      <AboutNote>
        <a href="http://morajabi.me">Mohammad R.</a>{' '}
        writes here.<br />
        Photos, tutorials and journeys.<br />
        It's 2017.
      </AboutNote>
    </Side>
    <Posts>
      <Post url="/blog/post/my-post-slug" />
      <Post />
    </Posts>
  </Wrapper>
)

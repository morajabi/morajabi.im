import styled from 'styled-components'

import rem from 'utils/rem'
import Post from 'components/blog/Post'
import Tag from 'components/blog/Tag'

const Wrapper = styled.div`
  height: 100vh;
  padding: ${rem(20)};
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${rem(200)} auto;
  grid-column-gap: ${rem(20)};
`

const Posts = styled.div`
`

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 1.6rem;
`

const TagWrapper = styled.span`
  margin-bottom: ${rem(7)};
`

export default () => (
  <Wrapper>
    <Tags>
      <TagWrapper><Tag>ruby</Tag></TagWrapper>
      <TagWrapper><Tag>js</Tag></TagWrapper>
      <TagWrapper><Tag>design</Tag></TagWrapper>
    </Tags>
    <Posts><Post /></Posts>
  </Wrapper>
)

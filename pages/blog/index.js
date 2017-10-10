import styled from 'styled-components'
import Post from 'components/blog/Post'

import rem from 'utils/rem'

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
  justify-content: center;
  align-items: flex-end;
`

export default () => (
  <Wrapper>
    <Tags>
      <span>#ruby</span>
      <span>#js</span>
      <span>#design</span>
    </Tags>
    <Posts><Post /></Posts>
  </Wrapper>
)

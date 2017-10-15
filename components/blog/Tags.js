import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import Tag from 'components/blog/Tag'

const Tags = styled.div`
  padding-top: ${rem(30)};
`

const TagWrapper = styled.div`
  text-align: right;
  margin-bottom: ${rem(7)};

  ${mobile(css`
    display: inline-block;
    margin-right: ${rem(7)};
    margin-bottom: 0;
  `)}
`

const PostsList = () => (
  <div>
    <Tags>
        <TagWrapper><Tag active>ruby</Tag></TagWrapper>
        <TagWrapper><Tag>js</Tag></TagWrapper>
        <TagWrapper><Tag>design</Tag></TagWrapper>
      </Tags>
  </div>
)

export default PostsList

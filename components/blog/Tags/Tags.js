import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import Tag from 'components/blog/Tag'

const Wrapper = styled.div`
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

/**
 * returns newTags
 */
const getNewTags = (name, isActive, currentTags) => {
  let newTags

  if (isActive) {
    newTags = currentTags.filter(n => n !== name)
  } else {
    newTags = [ ...currentTags, name ]
  }

  return newTags
}

const Tags = ({ tags = [], activeTags = [], onTagsChange = () => {} }) => (
  <Wrapper>
    {tags.map((tag) => {
      const isActive = activeTags.includes(tag.name)

      return (
        <TagWrapper key={tag.id}>
          <Tag
            active={isActive}
            onClick={() => onTagsChange(getNewTags(tag.name, isActive, activeTags))}
          >
            {tag.name}
          </Tag>
        </TagWrapper>
      )
    })}
  </Wrapper>
)

export default Tags

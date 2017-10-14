import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import Post from 'components/blog/Post'
import Tag from 'components/blog/Tag'

const Wrapper = styled.div`
  height: 100vh;
  padding: ${rem(20)};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: ${rem(60)} auto;
  grid-template-columns: ${rem(200)} auto;
  grid-column-gap: ${rem(30)};
  grid-row-gap: ${rem(30)};

  ${mobile(css`
    grid-template-columns: auto;
  `)}
`

const Posts = styled.div`
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  ${mobile(css`
    align-items: center;
  `)}
`

const AboutNote = styled.p`
  margin: 0;
  font-size: ${rem(13)};
  opacity: 0.5;
  transition: opacity 100ms ease-out;

  &:hover {
    opacity: 1;
  }
`

const SideAboutNote = styled.div`
  text-align: right;

  ${mobile(css`
    display: none;
  `)}
`

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

const Footer = styled.footer`
  display: none;
  padding: ${rem(30)} 0;
  text-align: center;

  ${mobile(css`
    display: block;
  `)}
`

export default () => (
  <Wrapper>
    <Side>
      <Tags>
        <TagWrapper><Tag active>ruby</Tag></TagWrapper>
        <TagWrapper><Tag>js</Tag></TagWrapper>
        <TagWrapper><Tag>design</Tag></TagWrapper>
      </Tags>

      <SideAboutNote>
        <AboutNote>
          <a href="http://morajabi.me">Mohammad R.</a>{' '}
          writes here.<br />
          Photos, tutorials and journeys.<br />
          It's 2017.
        </AboutNote>
      </SideAboutNote>
    </Side>
    <Posts>
      <Post url="/blog/post/my-post-slug" />
      <Post />
      <Post />
      <Post />
    </Posts>

    <Footer>
      <AboutNote>
        <a href="http://morajabi.me">Mohammad R.</a>{' '}
        writes here.<br />
        Photos, tutorials and journeys.<br />
        It's 2017.
      </AboutNote>
    </Footer>
  </Wrapper>
)

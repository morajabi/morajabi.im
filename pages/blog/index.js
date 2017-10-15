import styled, { css } from 'styled-components'
import withData from 'utils/withData'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import Tags from 'components/blog/Tags'
import { PostsListContainer } from 'components/blog/PostsList'
import AboutNote from 'components/blog/AboutNote'

const Wrapper = styled.div`
  height: 100vh;
  padding: ${rem(20)};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${rem(200)} auto;
  grid-column-gap: ${rem(30)};
  grid-row-gap: ${rem(30)};

  ${mobile(css`
    grid-template-columns: auto;
    grid-template-rows: ${rem(60)} auto;
  `)}
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${mobile(css`
    align-items: center;
  `)}
`

const SideAboutNote = styled.div`
  margin-top: ${rem(30)};
  text-align: right;

  ${mobile(css`
    display: none;
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

export default withData(() => (
  <Wrapper>
    <Side>
      <Tags />
      <SideAboutNote>
        <AboutNote />
      </SideAboutNote>
    </Side>

    <PostsListContainer />

    <Footer>
      <AboutNote />
    </Footer>
  </Wrapper>
))

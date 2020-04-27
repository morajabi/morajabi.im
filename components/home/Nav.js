import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { mobile } from '../../utils/media'
import Link from 'next/link'

export default () => (
  <Wrapper>
    <SectionTitle>Wanna know me?</SectionTitle>

    <List>
      <Link href="/blog" passHref>
        <ListItem>Blog</ListItem>
      </Link>
      <ListItem href="https://angel.co/morajabi">Resume</ListItem>
      <ListItem href="https://github.com/morajabi">GitHub</ListItem>
      <ListItem href="https://twitter.com/morajabi">
        Twitter
        <Desc>Feel free to DM me!</Desc>
      </ListItem>
    </List>
  </Wrapper>
)

const Wrapper = styled.div`
  grid-column-start: 2;
  grid-column-span: 2;

  margin-top: 70px;
  margin-bottom: 140px;
  text-align: right;
`

const SectionTitle = styled.div`
  font-weight: 900;
  font-size: 45px;
  text-align: right;

  color: #595959;

  ${mobile(css`
    font-size: 25px;
  `)};
`

const List = styled.nav`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const linkBlue = '#2E74E0'

const ListItem = styled.a`
  position: relative;
  display: inline-block;
  padding-right: 55px;
  padding-left: 20px;
  padding-bottom: 18px;

  font-weight: bold;
  line-height: 1.1em;
  font-size: 25px;
  text-align: right;
  text-decoration: none;

  color: ${linkBlue};
  transition: all 150ms;

  &:after {
    content: '';
    height: 1px;
    width: 27px;

    position: absolute;
    right: 0;
    top: 15px;

    background: #a3a3a3;
  }

  &:hover {
    color: ${darken(0.3, linkBlue)};
    transform-origin: right 55px 50%;
    transform: scale(1.05);
  }
`

const Desc = styled.span`
  display: block;
  font-size: 15px;
  font-weight: normal;
  font-style: italic;
  color: #9c9c9c;
`

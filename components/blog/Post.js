import Link from 'next/link'
import styled from 'styled-components'

import rem from 'utils/rem'
import { headerFont } from 'utils/fonts'
import { mostlyBlack } from 'utils/colors'

const Wrapper = styled.a`
  display: block;
  padding: ${rem(20)} ${rem(30)};
  text-decoration: none;
  background: transparent;
  color: ${mostlyBlack};
  transition: background 100ms ease-out;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${headerFont};
  font-weight: 700;
  font-size: ${rem(25)};
`

const Meta = styled.span`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: ${rem(15)};
  letter-spacing: ${rem(1)};
`

const Post = ({ url = '/' }) => (
  <Link href={url}>
    <Wrapper href={url}>
      <Title>How to config Webpack and Babel for React 16</Title>
      <Meta>written 32 days ago</Meta>
    </Wrapper>
  </Link>
)

export default Post

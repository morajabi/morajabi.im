import styled, { css } from 'styled-components'
import Link from 'next/link'

// Local
import Container from '../shared/Container'
import { mobile } from '../../utils/media'

const HeroPost = ({ title, slug, heroSrc }) => (
  <Container wide>
    <article>
      <Link href={`/blog/${slug}`} passHref prefetch>
        <Wrapper heroSrc={heroSrc}>
          <Tag>Latest</Tag>
          <Title>{title}</Title>
          <Link href={`/blog/${slug}`} passHref>
            <Continue>Continue Reading →</Continue>
          </Link>
        </Wrapper>
      </Link>
    </article>
  </Container>
)

export default HeroPost

// Styles
const Wrapper = styled.a`
  max-width: 800px;
  height: 350px;

  border-radius: ${p => p.theme.radiusBig}px;
  background-image: linear-gradient(
      360deg,
      #ffffff 0%,
      rgba(8, 44, 56, 0.5) 0.01%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${p => p.heroSrc});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-decoration: none;
  padding: 42px;

  &:hover {
    background-image: linear-gradient(
        360deg,
        #ffffff 0%,
        rgba(8, 44, 56, 0.6) 0.01%,
        rgba(0, 0, 0, 0) 90%
      ),
      url(${p => p.heroSrc});
  }

  ${mobile(css`
    max-width: calc(100% + 36px);
    margin-left: -18px;
    margin-right: -18px;
  `)};
`

const Tag = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 1;
  user-select: none;

  color: rgba(255, 255, 255, 0.4);
`

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
  max-width: 700px;

  font-size: 38px;
  line-height: 1.1;
  color: white;
`

const Continue = styled.a`
  margin-top: 20px;

  display: inline-block;
  font-size: 20px;
  line-height: 1;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.6);
  }
`

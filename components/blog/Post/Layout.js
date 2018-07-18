import styled, { css } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Link from 'next/link'
import { withRouter } from 'next/router'

// Local
import Container from '../../shared/Container'
import ShareOnTwitter from './ShareOnTwitter'
import TopBar from './TopBar'
import Header from './Header'

// Utils
import { mobile } from '../../../utils/media'

// Data
import posts from '../../../data/posts.json'

const Layout = ({ children, router: { route } }) => {
  const slug = route.replace('/blog/', '').replace('/')
  const url = `https://morajabi.me/blog/${slug}`
  const { title, publishedAt, heroSrc } = posts[slug]

  return (
    <MDXProvider
      components={{
        p: Paragraph,
        a: A,
        blockquote: Blockquote,
        inlineCode: InlineCode,
        code: StyledSyntaxHighlighter,
        ol: Ol,
        ul: Ul,
        li: Li,
        h1: H3,
        h2: H4,
        img: Image,
        hr: Hr,
      }}
    >
      <Wrapper>
        <TopBar />
        <Container>
          <Header title={title} publishedAt={publishedAt} heroSrc={heroSrc} />

          <Content>{children}</Content>

          <Hr />
          <Paragraph>
            I really hope you enjoyed reading this post! I'm living on{' '}
            <A href="https://twitter.com/morajabi">Twitter</A>. Oh, and my
            direct message is open, too. Follow me or feel free to reach out via
            DM!
          </Paragraph>
          <Paragraph>— Written by Mo! &nbsp;</Paragraph>

          <Hr />

          <div align="center">
            <ShareOnTwitter text={`💡 "${title}"\n\n👉`} link={url} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <small>
              <Link href="/blog" passHref>
                <A>See my other posts →</A>
              </Link>
            </small>
          </div>
        </Container>
      </Wrapper>
    </MDXProvider>
  )
}

export default withRouter(Layout)

// Styles
const Wrapper = styled.div`
  --heading-font: 'IBM Plex Sans', 'IBM Plex Serif', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;

  font-size: 20px;
  line-height: 1.62;
  letter-spacing: -0.007em;
  color: #333;

  word-break: break-word;
  word-wrap: break-word;

  margin-bottom: 160px;

  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }

  iframe {
    margin-top: 32px;
    width: 100%;
  }

  ${mobile(css`
    font-size: 18px;
  `)};
`

const Content = styled.div`
  > div:first-child > p:first-child {
    margin-top: 20px;
  }
`

const Blockquote = styled.blockquote`
  padding: 0;
  padding-left: 48px;
  margin: 0;
  margin-top: 49px;

  font-style: italic;
  font-weight: 500;
  font-size: 1.4em;
  color: #666;
  font-family: 'IBM Plex Sans Condensed', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;

  + p {
    margin-top: 55px;
  }

  ${mobile(css`
    padding-left: 26px;
  `)};
`

const InlineCode = styled.code`
  padding-left: 1px;
  padding-right: 1px;
  display: inline-block;
  line-height: 1.45;
  font-family: 'dm', monospace;

  color: #444;
  border-radius: 2px;
  background: #f4f4f6;
`

const A = styled.a`
  display: inline-block;
  border-radius: 2px;
  line-height: 1.25;
  padding: 0 1px;
  margin: 0 -1px;

  color: hsl(220, 60%, 50%);

  text-decoration: none;
  transition: background 120ms ease;

  &:hover {
    background: hsl(200, 45%, 93%);
  }
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter).attrs({
  customStyle: {
    padding: '18px 20px',
    backgroundColor: `#f7f7f8`,
  },
})`
  line-height: 1.45;
  font-family: 'dm', monospace;
  font-size: 0.95em;

  margin-left: -20px;
  margin-right: -20px;
  margin-top: 12px;

  border-radius: 4px;

  code {
    font-family: 'dm', monospace;
  }

  ${mobile(css`
    margin-left: -8px;
    margin-right: -8px;
  `)};
`

const listStyles = css`
  padding: 0;
  list-style: none;
  list-style-image: none;

  margin-top: 38px;

  ${mobile(css`
    margin-top: 30px;
  `)};
`

export const Ul = styled.ul`
  ${listStyles};

  li {
    &:before {
      content: '•';
      font-size: 25px;
      line-height: 0.9;
      vertical-align: middle;
      padding-top: 4px;
      padding-right: 15px;
    }
  }
`

export const Ol = styled.ol`
  ${listStyles};

  counter-reset: post;

  li {
    &:before {
      font-feature-settings: 'liga' on, 'lnum' on;
      -moz-font-feature-settings: 'liga' on, 'lnum' on;
      -webkit-font-feature-settings: 'liga' on, 'lnum' on;
      padding-right: 12px;
      counter-increment: post;
      content: counter(post) '.';
    }
  }
`

export const Li = styled.li`
  margin-left: 30px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    position: absolute;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 78px;
    margin-left: -78px;
    text-align: right;
  }
`

export const Paragraph = styled.p`
  margin: 0;
  margin-top: 38px;

  & + ${Ol}, & + ${Ul}, & + p {
    margin-top: 29px;

    ${mobile(css`
      margin-top: 21px;
    `)};
  }

  ${mobile(css`
    margin-top: 30px;
  `)};
`

export const H4 = styled.h4`
  font-family: var(--heading-font);
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  color: #334;
  letter-spacing: -0.015em;

  margin-top: 32px;
  margin-bottom: 8px;

  ${mobile(css`
    font-size: 22px;

    margin-top: 16px;
    margin-bottom: 8px;
  `)};

  & + ${Paragraph} {
    margin-top: 0;
  }

  & + img,
  p > img {
    margin-top: 14px;
  }
`

export const H3 = styled.h3`
  font-family: var(--heading-font);
  font-size: 35px;
  line-height: 1.23;
  font-weight: bold;
  color: #334;

  letter-spacing: -0.02em;

  margin-top: 62px;
  margin-bottom: 8px;

  ${mobile(css`
    font-size: 28px;

    margin-top: 48px;
    margin-bottom: 24px;
  `)};

  & + ${Paragraph} {
    margin-top: 0;
  }

  & + ${H3} {
    margin-top: 0;
  }

  & + img,
  p > img {
    margin-top: 14px;
  }
`

export const Hr = styled.hr`
  margin-top: 52px;
  margin-bottom: 42px;
  display: block;
  border: 0;
  text-align: center;
  overflow: visible;
  height: 0;

  &:before {
    --x-height-multiplier: 0.342;
    --baseline-multiplier: 0.22;

    font-family: medium-content-slab-serif-font, Georgia, Cambria,
      'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: italic;
    font-size: 30px;
    letter-spacing: 0.6em;
    content: '...';
    display: inline-block;
    margin-left: 0.6em;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    top: -30px;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin: auto;
`

export const WideImage = styled.img`
  max-width: calc(100% + 100px);
  margin-left: -50px;
  margin-right: -50px;

  margin-top: 28px;

  ${mobile(css`
    max-width: calc(100% + 36px);
    margin-left: -18px;
    margin-right: -18px;
    margin-top: 20px;
  `)};
`

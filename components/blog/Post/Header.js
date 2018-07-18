import Head from 'next/head'
import { string, node } from 'prop-types'
import { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { mobile } from '../../../utils/media'

export default class PostHeader extends Component {
  static propTypes = {
    title: string.isRequired,
    desc: string,
    publishedAt: string.isRequired,
    heroSrc: string,
  }

  render() {
    const { title, desc, publishedAt, heroSrc } = this.props
    const image = `https://morajabi.im${
      heroSrc ? heroSrc : `/static/Mohammad-Rajabifard-portrait.jpg`
    }`

    return (
      <Fragment>
        <Head>
          <title>{title} - Mo Rajabifard</title>
          <meta name="article.published" content={publishedAt} />
          <meta name="pubdate" content={publishedAt} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:site_name" content="Mohammad Rajabifard's blog" />
          <meta property="og:description" content={desc} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@morajabi" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={desc} />
          <meta name="twitter:image" content={image} />
        </Head>

        {heroSrc && <Hero src={heroSrc} />}

        {publishedAt && (
          <Time itemprop="startDate" datetime={publishedAt}>
            Published {distanceInWordsToNow(publishedAt, { addSuffix: true })}
          </Time>
        )}

        {title && <Title>{title}</Title>}
      </Fragment>
    )
  }
}

// Styles
const Hero = styled.img`
  border-radius: ${p => p.theme.radiusBig}px;
  height: 350px;
  width: calc(100% + 100px);
  margin-left: -50px;
  margin-right: -50px;
  margin-bottom: 60px;

  object-fit: cover;
  object-position: center;

  ${mobile(css`
    width: calc(100% + 36px);

    margin-left: -18px;
    margin-right: -18px;
    border-radius: 0;

    margin-bottom: 40px;
  `)};
`

const Time = styled.time`
  display: block;

  font-size: 15px;
  line-height: 1;
  letter-spacing: 1px;
  color: #bdbdbd;
  text-transform: uppercase;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  margin-bottom: 12px;
`

const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: 39px;
  line-height: 1.3;
  font-weight: bold;
  color: #222;
  letter-spacing: -0.2px;

  ${mobile(css`
    font-size: 28px;
  `)};
`

import React, { Component } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import withData from 'utils/withData'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { TagsContainer } from 'components/blog/Tags'
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

class Index extends Component {
  state = {
    activeTags: []
  }

  render() {
    const { activeTags } = this.state

    return (
      <Wrapper>
        <Head>
          <title>Blog - Mohammad Rajabifard</title>
          <meta property="og:title" content={Blog - Mohammad Rajabifard} />
          <meta property="og:image" content="https://morajabi.me/static/Mohammad-Rajabifard-portrait.jpg"/>
          <meta property="og:site_name" content="Mohammad Rajabifard's blog" />
          <meta property="og:description" content="Hey! I write about JS, dev, design and photography"/>
        </Head>

        <Side>
          <TagsContainer
            activeTags={activeTags}
            onTagsChange={this.tagsChanged}
          />
          <SideAboutNote>
            <AboutNote />
          </SideAboutNote>
        </Side>

        <PostsListContainer activeTags={activeTags} />

        <Footer>
          <AboutNote />
        </Footer>
      </Wrapper>
    )
  }

  tagsChanged = newTags => {
    this.setState({ activeTags: newTags })
  }
}

export default withData(Index)

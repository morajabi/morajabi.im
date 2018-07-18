import { Component } from 'react'
import Head from 'next/head'

// Local
import Header from '../../components/blog/Header'
import HeroPost from '../../components/home/HeroPost'

// Data
import posts from '../../data/posts.json'
import RecentPosts from '../../components/blog/RecentPosts'

export default class Index extends Component {
  render() {
    const sortedSlugs = Object.keys(posts).sort(
      (a, b) => new Date(posts[b].publishedAt) - new Date(posts[a].publishedAt)
    )
    const sortedPosts = sortedSlugs.map(slug => ({ slug, ...posts[slug] }))
    const latestPost = sortedPosts[0]
    // Exclude latest post
    const recentPosts = sortedPosts.slice(1, 4)

    return (
      <>
        <Head>
          <title>Mo Rajabi - blog about makers and creatives life</title>
          <meta
            property="og:image"
            content="https://morajabi.im/static/Mohammad-Rajabifard-portrait.jpg"
          />
          <meta property="og:site_name" content="Mohammad Rajabi's blog" />
          <meta
            property="og:description"
            content="Mohammad Rajabifard writes for creators of any kind, developers, photographers, like, creatives! Also, about my life journey."
          />
        </Head>

        <Header />

        <HeroPost
          title={latestPost.title}
          heroSrc={latestPost.heroSrc}
          slug={latestPost.slug}
        />

        {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}
      </>
    )
  }
}

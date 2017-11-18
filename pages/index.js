import Head from 'next/head'
import styled from 'styled-components'

import HeroSection from 'components/home/HeroSection'
import Nav from 'components/home/Nav'

export default () =>
  <PageWrapper>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,900" rel="stylesheet" />
    </Head>

    <HeroSection />
    <Nav />
  </PageWrapper>

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 975px auto;

  * {
    font-family: 'Playfair Display', serif;
  }
`

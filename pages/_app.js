import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'

// Utils
import theme from '../utils/theme'

// Layouts
import BlogPostLayout from '../components/blog/Post/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router: { route = '' } } = this.props
    let Layout = null

    if (route.startsWith('/blog/') && route.length > 6) {
      Layout = BlogPostLayout
    }

    return (
      <Container>
        <ThemeProvider theme={theme}>
          {Layout ? (
            <Layout>
              {' '}
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </Container>
    )
  }
}

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

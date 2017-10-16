import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const globalStyles = `
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }
`

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
      <Head>
          <title>Mohammad Rajabifard</title>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png">
          <link rel="manifest" href="/static/icons/manifest.json">
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5">
          <meta name="theme-color" content="#ffffff">

          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <link href="https://fonts.googleapis.com/css?family=Miriam+Libre:700|Nunito:400,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument

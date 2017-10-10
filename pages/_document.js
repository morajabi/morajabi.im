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
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
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

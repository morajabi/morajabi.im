const fs = require('fs')
const path = require('path')
const next = require('next')
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    if (!dev) {
      server.use(compression())
      server.use(helmet())

      // create a write stream (in append mode)
      const accessLogStream = fs.createWriteStream(
        path.join(__dirname, 'access.log'),
        { flags: 'a' }
      )

      // setup the logger
      server.use(morgan('combined', { stream: accessLogStream }))
    }

    server.get('/blog/:slug', (req, res) => {
      const { query, params: { slug } } = req
      const queryWithSlug = { ...query, slug }
      return app.render(req, res, '/blog/post', queryWithSlug)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

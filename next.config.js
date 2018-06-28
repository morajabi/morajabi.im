const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [],
    hastPlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  exportPathMap(defaultExportMap) {
    return {
      ...defaultExportMap,
    }
  },
})

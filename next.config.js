module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/blog/fixmoji-icon-with-love': { page: '/blog/post', query: { slug: 'fixmoji-icon-with-love' } },
      '/blog/custom-alias-imports-in-js-w-babel': { page: '/blog/post', query: { slug: 'custom-alias-imports-in-js-w-babel' } },
    }
  }
}

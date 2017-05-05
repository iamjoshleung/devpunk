const webpack = require('webpack')

module.exports = {
  build: {
    vendor: ['jquery', 'bootstrap', 'lodash', 'vue-awesome'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        "Tether": 'tether',
        _: 'lodash'
      })
    ]
  },
  // include bootstrap css
  css: ['bootstrap/dist/css/bootstrap.css'],
  // include bootstrap js on startup
  plugins: ['~plugins/bootstrap.js', '~plugins/picturefill.js', '~plugins/vue-awesome.js'],

  head: {
    titleTemplate: '%s - Devpunk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
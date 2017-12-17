const environment = require('./environment')
//  loader: 'istanbul-instrumenter-loader',
// -        query: {
// -          esModules: true
// -        }
module.exports = environment.toWebpackConfig()

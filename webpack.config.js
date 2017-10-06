const path = require('path');
const webpack = require('webpack')

const config = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devServer: {
        port: 9000
    },
};

if ( process.env.NODE_ENV === 'development' ) {
    config.watch = true
    config.devtool = 'source-map'

} else if ( process.env.NODE_ENV === 'hot' ) {
    config.devtool = 'source-map'
    config.devServer.hot = true
    config.plugins = [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config
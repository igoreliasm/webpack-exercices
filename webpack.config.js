const path = require('path');

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
}

module.exports = config
const {resolve} = require('path')

module.exports = () => {
    return {
        context: resolve('src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                }
            ]
        }
    }
}
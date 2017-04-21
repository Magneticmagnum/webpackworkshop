const {resolve} = require('path')

module.exports = () => {
    return {
        context: resolve('src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
        },
    }
}
const path = require('path');

module.exports = {
    entry: {
        intake: path.resolve(__dirname, './index.js')
    },
    output: {
        path: __dirname + '/../public',
        filename: 'bundle.js',
        publicPath: ''
    },
    devServer: {
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?p|gif|svg|jpg)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
}
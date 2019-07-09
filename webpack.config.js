const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/'
    },

    devServer: {
        port: 3000,
        open: true,
        contentBase: './public'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ],
                        include: path.join(__dirname, 'src'),
                        exclude: /node_modules/
                    }
                }
            }
        ]
    }

}

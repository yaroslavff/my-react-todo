const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const optimization = () => {
    const config = {}

    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin()
        ]
    }

    return config;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
        open: true
    },
    devtool: isDev ? 'source-map' : false,

    plugins: [
        // HTML

        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            cache: false
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/static/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/static/favicon.ico')
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // TypeScript
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // React
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // css
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                  'css-loader'
                ],
            },

            // s[ac]ss

            {
                test: /\.sass|scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },

            // img
            {
                test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                ],
            },

            // fonts
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    },
                ],
            }
        ],
    },
}
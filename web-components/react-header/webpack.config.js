const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/web-component.tsx',
    devServer: {
        port: 8081
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'header-web-component.css'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'header-web-component.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
};
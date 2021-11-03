const path = require('path');

module.exports = {
    entry: './src/web-component.tsx',
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
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'header-web-component.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
};
const path = require('path')

// console.log(__dirname)
// console.log(path.join(__dirname, 'public'))

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')

    }
}

// loader - customise behaviour of webpack
// compile jsx to regular js
// compile es6 to es5
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'src/client/public');
var APP_DIR = path.resolve(__dirname,'src/client/app');

var config = {
    entry: [
        'whatwg-fetch',
        APP_DIR + '/js/index.jsx'
    ],
    output: {
        path: BUILD_DIR+'/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    }
};

module.exports = config;
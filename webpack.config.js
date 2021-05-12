const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'myBundle.js'
    },
    devServer: {
      before: function(src,server){
        server._watch('./src/*.html')
      },
      contentBase: path.join(__dirname,'src'),
      hot: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader","css-loader"],
        },
        {
          test: /\.(png|svg|jpeg|jpg|gif|svg)$/i,
          type: "asset/resource"
        }
      ]
    },
     devtool: 'inline-source-map',
    
    
} /*  module.exports end */
var webpack = require('webpack');

module.exports = {
 entry: "./js/main.jsx",
 output: {
   path: __dirname,
   filename: "js/bundle.js"
 },
 plugins: [
   new webpack.ProvidePlugin({
     "_": "underscore",
     "$": "jquery",
     "backbone":"backbone"
   })
 ],
 module: {
   loaders: [
     {test: /\.css$/, loader:'style!css'},
     {test: /\.json$/, loader:'json'},
     {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
     {test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
   ]
 }
};
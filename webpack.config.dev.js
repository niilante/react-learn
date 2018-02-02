import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors/
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot-loader/webpack','babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        },
        {
          loader: 'css-loader' // translates CSS into CommonJS
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
        }
        ]

      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

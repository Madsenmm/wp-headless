const path = require('path');
const webpack = require('webpack');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


function resolve(dir) {
	return path.join(__dirname, './', dir);
}

// const HOST = process.env.HOST;
// const PORT = process.env.PORT && Number(process.env.PORT);

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode : devMode ? 'development' : 'production',
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		// extensions: ['.js', '.vue', '.json'],
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
		alias: {
			// 'vue$': 'vue/dist/vue.esm.js',
      	'vue$': 'vue/dist/vue.js',
			'@': resolve('src'),
		}
	},
	module: {
    rules: [
    // {
    //     test: /\.(sa|sc|c)ss$/,
    //     use: [
    //       {
    //         loader: MiniCssExtractPlugin.loader,
    //         options: {
    //           hmr: process.env.NODE_ENV === 'development',
    //         },
    //       },
    //       'vue-style-loader',
    //       'css-loader',
    //       'postcss-loader',
    //       'sass-loader',
    //     ],
    //   },
      {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  // devServer: {
  //   host: 'localhost',
  //   port: 8888,
  //   open: true,
  //   inline: true,
  //   watchOptions: {
  //     poll: true
  //   },
  //   // proxy: {
  //   //   '/': 'http://localhost:8888/importwheels/',
  //   // },
  // },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4000,
      proxy: 'http://localhost:8888/importwheels/',
    }),
  ]
};
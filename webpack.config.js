var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      heroApi: 'app/api/api.jsx',
      HeroSearch: 'app/Pages/HeroSearch/components/HeroSearch.jsx',
      HeroDetails: 'app/Pages/HeroSearch/components/HeroDetails.jsx',
      HeroForm: 'app/Pages/HeroSearch/components/HeroForm.jsx',
      Main: 'app/Pages/Main/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      applicationStyles: 'app/styles/app.css',
      HeroError: 'app/Pages/HeroSearch/components/HeroError.jsx',
      ListHeroes: 'app/Pages/ListHeroes.jsx',
      HeroDetail: 'app/Pages/HeroDetail.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

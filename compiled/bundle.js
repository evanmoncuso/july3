'use strict';

module.exports = {
  entry: '/client/scripts/',
  output: {
    path: '/client',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2J1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLFNBQU8sa0JBRFE7QUFFZixVQUFRO0FBQ04sVUFBTSxTQURBO0FBRU4sY0FBVTtBQUZKLEdBRk87QUFNZixVQUFRO0FBQ04sYUFBUyxDQUNQO0FBQ0UsWUFBTSxPQURSO0FBRUUsZUFBUyxjQUZYO0FBR0UsY0FBUTtBQUhWLEtBRE87QUFESCxHQU5PO0FBZWYsV0FBUztBQUNQLGdCQUFZLENBQUMsRUFBRCxFQUFLLEtBQUwsRUFBWSxPQUFaO0FBREw7QUFmTSxDQUFqQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnk6ICcvY2xpZW50L3NjcmlwdHMvJyxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogJy9jbGllbnQnLFxuICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJ1xuICB9LFxuICBtb2R1bGU6IHtcbiAgICBsb2FkZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnJywgJy5qcycsICcuanNvbiddXG4gIH1cbn07XG4iXX0=
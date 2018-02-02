/**
 * Created by matt on 2/26/17.
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 version']
    }),
    require('postcss-flexbugs-fixes'),
    require('css-mqpacker')
  ]
};

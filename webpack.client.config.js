const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: './src/clientEntry.tsx',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist/client',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', 'src'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'client'),
  },
};

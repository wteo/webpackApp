import { resolve, dirname } from 'path';
// Defining "__dirname" in ES module
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  mode: 'development',
  // Instructs the computer to look at the entry point of the app
  entry: {
    main: resolve(__dirname, 'src/index.js'),
    // shorthand --> entry: resolve(__dirname, 'src/index.js'),
    // if want to create multiple entry points, then, add give multiple object names
  },
  // instructs the computer the result output
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    // all code will be bundled to main.bundle.js
    // If want to create multiple output, substitute "main" for "[name]"
  },
  // Loader
  module: {
    rules: [
      {
        // test - identifies which file(s) should be transformed
        test: /\.css$/,
        // use - indicates which loader should be used to do the transforming
        use: ['css-loader'],
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-bootstrap-typeahead|react-scroll)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        }
      }
    }
  },
  // Plugin
  /*
  plugins: [
    new Object({}),
  ],
  */
}

export default config;
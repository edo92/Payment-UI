import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import alias from "./configs/paths.webpack";

class Settings {
  static entry_file = "src/index.tsx";
  static html_template = "public/index.html";
  static ts_config = "tsconfig.json";
  static output_dir = "build";
  static bundlename = "[name].[contenthash].bundle.js";

  static mode: "development" = "development";
  static devtool = "eval-cheap-source-map";
  static extensions: string[] = [".ts", ".tsx", ".js", ".json"];
  static stats: "errors-only" = "errors-only";
}

const config: webpack.Configuration = {
  mode: Settings.mode,
  stats: Settings.stats,
  devtool: Settings.devtool,

  output: {
    publicPath: "/",
    filename: Settings.bundlename,
    path: path.resolve(__dirname, Settings.output_dir),
  },

  resolve: {
    extensions: Settings.extensions,
    alias: alias,
  },

  entry: {
    index: path.resolve(__dirname, Settings.entry_file),
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: Settings.html_template,
    }),

    new webpack.ProvidePlugin({
      React: "react",
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, Settings.ts_config),
      },
    }),
  ],

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            iesafe: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              // skip typechecking for speed
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", { regenerator: true }],
            ],
          },
        },
      },
    ],
  },
};

export default config;

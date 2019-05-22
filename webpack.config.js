const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const postCssConfig = {
    stage: 1,
    features: {
        "nesting-rules": true,
    },
};

module.exports = (env, argv) => { return {

    entry: [
        "./src/index.ts",
    ],

    output: {
        publicPath: "/",
        path: path.resolve(process.cwd(), "dist"),
        filename: argv.mode === "production" ? "[name].[hash].js" : "[name].js",
    },

    devtool: argv.mode === "production" ? "none" : "inline-source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".mjs", ".css"],
        modules: [
            path.resolve("./src"),
            path.resolve("./node_modules"),
        ],
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                loaders: [
                    "babel-loader",
                    "ts-loader",
                ],
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        attrs: [":href"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap: argv.mode !== "production",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: argv.mode !== "production",
                            camelCase: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: argv.mode === "production" ? "c-[hash:base64:8]" : "[name]-[local]-[hash:base64:4]",
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: argv.mode !== "production" ? "inline" : false,
                            plugins: (loader) => argv.mode === "production" ? [
                                require("postcss-import")({root: loader.resourcePath}),
                                require("postcss-nesting")(),
                                require("postcss-preset-env")(postCssConfig),
                                require("cssnano")(),
                            ] : [
                                require("postcss-import")({root: loader.resourcePath}),
                                require("postcss-nesting")(),
                                require("postcss-preset-env")(postCssConfig),
                            ],
                        },
                    },
                ],
            },
        ],
    },

    plugins: argv.mode === "production" ? [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ] : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        hot: false,
        historyApiFallback: true,
    },

}; };

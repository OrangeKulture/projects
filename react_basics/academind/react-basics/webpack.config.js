// const path = require("path");

// const DIST_DIR = path.resolve(__dirname,"dist");
// const SRC_DIR = path.resolve(__dirname, "src");

// let options = {
//     entry: SRC_DIR + "app/index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js/,
//                 include: SRC_DIR,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ["react", "es2015", "stage-1", "env"]
//                 }
//             }
//         ]
//     }
// }

// module.exports = options;




module.exports = options => {
    return {
        entry: './src/app/index.js',
        output: {
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: "./src"
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true
                            },
                        },
                    ],
                },
            ],
        },
        mode: 'development'
    }
};
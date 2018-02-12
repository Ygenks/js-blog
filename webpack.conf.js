module.exports = {
    entry: "./src/feed.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loader: {
            test: /\.js$/,
            loaders: ['babel']
        }
    }
};

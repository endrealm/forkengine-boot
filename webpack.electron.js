const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    // Build Mode
    mode: "development",
    // Electron Entrypoint
    entry: "./src/main.ts",
    target: "electron-main",
    resolve: {
        // alias: {
        //     ["@"]: path.resolve(__dirname, "src"),
        // },
        extensions: [".tsx", ".ts", ".js"],
    },
    externals: [nodeExternals({
        modulesDir: path.resolve(__dirname, '../../node_modules'),
    })],
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: "ts-loader" }],
            },
        ],
    },
    output: {
        path: __dirname + "/dist",
        filename: "main.js",
    },
};

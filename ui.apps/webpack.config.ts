// webpack.config.js

import * as webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';

const CLIENTLIB_ROOT = './src/main/content/jcr_root/apps/aem-vue-demo/clientlibs';
const CLIENTLIB_NAME = 'clientlib-site';

function createConfig(clientlibRoot: string, clientlib: string): webpack.Configuration {
    return {
        entry: {
            bundle: `./${clientlibRoot}/${clientlib}/webpack-entry.js`
        },
        output: {
            path: `${__dirname}/${clientlibRoot}/${clientlib}/dist`,
            filename: './[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
            ]
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            },
            extensions: ['.ts', '.tsx', '.vue', '.json']
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    };
}

module.exports = createConfig(CLIENTLIB_ROOT, CLIENTLIB_NAME);

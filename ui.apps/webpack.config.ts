// webpack.config.js

import * as webpack from 'webpack';

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
    };
}

module.exports = createConfig(CLIENTLIB_ROOT, CLIENTLIB_NAME);

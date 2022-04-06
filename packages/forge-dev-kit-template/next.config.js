/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const withImages = require('next-images');

module.exports = withImages({
    images: {
        disableStaticImages: true,
    },
    experimental: {
        externalDir: true,
    },
    pageExtensions: ['page.tsx'],
    webpack: (config) => {
        config.resolve.mainFields = ['browser', 'module', 'main'];
        return config;
    },
    assetPrefix: '.',
    // required for forge tunneling
    compress: false,
});

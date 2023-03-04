/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const withImages = require('next-images');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) =>
    withImages({
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
        // without the phase check we're running into websocket issues with fast reload;
        // see https://stackoverflow.com/a/73879833
        assetPrefix: phase === PHASE_DEVELOPMENT_SERVER ? undefined : '.',
        // required for forge tunneling
        compress: false,
    });

module.exports = {
    presets: [
        [
            'next/babel',
            {
                'preset-react': {
                    runtime: 'automatic',
                    importSource: '@emotion/core',
                },
            },
        ],
    ],
    plugins: ['emotion'],
};

const withTwin = require('./withTwin.js');

/** @type {import('next').NextConfig} */
module.exports = withTwin({
    reactStrictMode: true,
    experimental: {
        forceSwcTransforms: true,
    },
});

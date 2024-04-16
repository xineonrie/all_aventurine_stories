const path = require('path');

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                // 配置 sass-loader
                sassOptions: {
                    includePaths: [path.resolve(__dirname, 'src')],
                },
            },
        },
    },
    webpack: {
        alias: {},
        plugins: [],
        configure: (webpackConfig, { env, paths }) => {
            const rules = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
            rules.splice(rules.length - 1, 0, {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src')],
                            },
                        },
                    },
                ],
            });

            return webpackConfig;
        },
    },
};

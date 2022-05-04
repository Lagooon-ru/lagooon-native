module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        api: './src/api',
                        components: './src/components',
                        layouts: './src/layouts',
                        models: './src/models',
                        navigations: './src/navigations',
                        screens: './src/screens',
                        utils: './src/utils',
                    }
                }
            ],
            'react-native-reanimated/plugin',
        ]
    };
};

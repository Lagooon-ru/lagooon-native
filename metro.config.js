const {getDefaultConfig} = require("@expo/metro-config");

module.exports = (async () => {
    const {resolver} = await getDefaultConfig(__dirname);
    const {sourceExts, assetExts} = resolver;

    return {
        transformer: {
            getDefaultOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true,
                },
            }),
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'cjs', 'svg', 'otf', 'ttf'],
        },
    }
})();
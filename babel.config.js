module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            components: './src/components',
            screens: './src/screens',
            redux: './src/redux',
            hooks: './src/hooks',
            common: './src/common',
            assets: './src/assets',
          },
        },
      ],
    ],
  };
};

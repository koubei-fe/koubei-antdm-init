const pxtorem = require('postcss-pxtorem');
const path = require('path');

// 如果需要本地部署图标，需要在此加入本地图标路径
const svgDirs = [
  path.resolve(__dirname, 'src/assets/svg'),
];
const antDir = require.resolve('antd-mobile').replace(/warn\.js$/, '');
svgDirs.push(antDir);

module.exports = webpackConfig => {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    style: true,  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  /* eslint no-param-reassign:0 */
  webpackConfig.module.loaders = webpackConfig.module.loaders.filter(
    loader => loader.test.toString().indexOf('.svg') === -1
  );

  // 因为一个 SVG 文件不能被处理两遍. exclude 掉 atool-build 默认为svg配置的svg-url-loade
  // https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L161
  // https://github.com/kisenka/svg-sprite-loader/issues/4
  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
      loader.exclude = svgDirs;
    }
  });

  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: require.resolve('svg-sprite-loader'),
    include: svgDirs,
  });
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));

  webpackConfig.resolve.alias = {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
    'create-react-class': 'preact-compat/lib/create-react-class',
  };

  return webpackConfig;
};

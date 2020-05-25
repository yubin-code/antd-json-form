export default {
  entry: 'src/index.tsx',
  extractCSS: true,
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};

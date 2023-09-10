const path = require('path');

module.exports = {
  // 다른 Webpack 설정...

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 별칭을 src 디렉토리로 지정
    },
  },
};
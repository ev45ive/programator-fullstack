//  https://create-react-app.dev/docs/proxying-api-requests-in-development/
//  npm install http-proxy-middleware --save
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};

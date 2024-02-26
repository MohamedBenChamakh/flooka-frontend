const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
   '/api',
    createProxyMiddleware({
      target: 'https://flooka-tv-api.vercel.app/',
      changeOrigin: true,
    })
  );
};
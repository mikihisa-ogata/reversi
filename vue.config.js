module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/othello-app/' : '/',
  devServer: {
    port: 8080,
    open: true
  }
};
module.exports = ({ file, options, env }) => ({
  plugins: {
    cssnano: env === 'production' ? {} : false,
    autoprefixer: { browsers: ['last 2 versions', '> 5%'] }
  }
});

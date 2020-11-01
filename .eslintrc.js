module.exports = {
  extends: 'airbnb-base',
  plugins: ['react'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
  },
};

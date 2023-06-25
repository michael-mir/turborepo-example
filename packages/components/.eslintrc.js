const eslint = require('@michael-mir/tools-eslint');

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    tsconfigRootDir: __dirname
  }
};

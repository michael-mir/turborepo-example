const eslint = require('@michael-mir/tools-eslint');

module.exports = {
  ...eslint,
  extends: [...eslint.extends, 'turbo']
};

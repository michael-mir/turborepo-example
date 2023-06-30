/** @type {import('@auto-it/conventional-commits').ConventionalCommitsOptions} */
const conventionalCommitsOptions = {
  defaultReleaseType: 'patch'
};

module.exports = () => {
  /** @type {import('auto').AutoRc} */
  const autoConfig = {
    baseBranch: 'master',
    author: 'Michael Mironychev <michael.mironychev@gmail.com>',
    plugins: ['released', 'npm', ['conventional-commits', conventionalCommitsOptions]],
    labels: []
  };

  return autoConfig;
};

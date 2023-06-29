/** @type {import('@auto-it/npm').INpmConfig} */
const npmOptions = {
  exact: true,
  canaryScope: '@auto-canary'
};

/** @type {import('@auto-it/all-contributors').IAllContributorsPluginOptions} */
const allContributorsOptions = {
  // types: {
  //   plugin: '**/plugin/**/*',
  //   code: ['**/src/**/*', '**/package.json', '**/tsconfig.json']
  // }
};

/** @type {import('@auto-it/conventional-commits').ConventionalCommitsOptions} */
const conventionalCommitsOptions = {
  preset: 'angular',
  defaultReleaseType: 'patch'
};

module.exports = () => {
  /** @type {import('auto').AutoRc} */
  const autoConfig = {
    baseBranch: 'master',
    author: 'Michael Mironychev <michael.mironychev@gmail.com>',
    plugins: [
      'released',
      ['npm', npmOptions],
      ['all-contributors', allContributorsOptions],
      ['conventional-commits', conventionalCommitsOptions]
    ],
    labels: []
  };

  return autoConfig;
};

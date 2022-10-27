'use strict';

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = ''; //getPublicUrlOrPath();

module.exports = {
  esLintFile: resolveApp('.eslintrc.js'),
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('dist'),
  appHtml: resolveApp('index.html'),
  appPackageJson: resolveApp('package.json'),
  publicUrlOrPath,
  testsSetup: resolveApp('src/setupTests.ts'),
  pureModalIndex: resolveApp('src/pure-modal/index.tsx'),
  exampleFile: resolveApp('examples/index.tsx'),
  exampleFolder: resolveApp('examples/'),
};

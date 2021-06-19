const fse = require('fs-extra');
const path = require('path');
const {task, extendConfig} = require('hardhat/config');

require('solidity-coverage');

task('coverage', async (taskArguments, hre, runSuper) => {
  hre.config.mocha.grep = '@skip-on-coverage'; // Find everything with this tag
  hre.config.mocha.invert = true; // Run the grep's inverse set
  const artifacts = hre.config.paths.artifacts;
  const artifactsBackup = `${artifacts}.bak`;
  if (fse.pathExistsSync(artifacts)) {
    fse.moveSync(artifacts, artifactsBackup, {overwrite: true});
  }
  const result = await runSuper(taskArguments);

  // hre.config.path.artifacts was modified during the coverage task
  const coverageArtifacts = path.normalize(path.join(config.paths.root, 'coverage_artifacts'));
  fse.moveSync(artifacts, coverageArtifacts, {overwrite: true});
  if (fse.pathExistsSync(artifactsBackup)) {
    fse.moveSync(artifactsBackup, artifacts, {});
  }

  return result;
});

const core = require('@actions/core');

try {
  const listOfNumbers = core.getInput('list-of-numbers');
  console.log(`Supplied numbers ${listOfNumbers}!`);
  core.setOutput("number", listOfNumbers);
} catch (error) {
  core.setFailed(error.message);
}
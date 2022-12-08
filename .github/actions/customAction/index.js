const core = require('@actions/core');

try {
  const listOfNumbers = core.getInput('list-of-numbers');
  console.log(`Supplied numbers ${listOfNumbers}!`);
  const numbers = listOfNumbers.split(',').map(Number);
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  core.setOutput("number", randomNumber);
} catch (error) {
  core.setFailed(error.message);
}
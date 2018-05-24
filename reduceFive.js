const { reduceDataFour } = require('./data');

const arrayFromString = reduceDataFour.split(' ');
const processedString = arrayFromString.reduce((acc, curr) => {
  acc = acc + '-' + curr;
  return acc;
}, '')

console.log(`PROCESSED DATA: ${processedString.slice(1)}`);

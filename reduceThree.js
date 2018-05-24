const { reduceDataTwo } = require('./data');

const processedData = reduceDataTwo.reduce((acc, curr) => {
  acc = acc.concat(curr.name);
  return acc;
}, []);

const prettifyData = JSON.stringify(processedData, null, 2);

console.log(`REDUCED DATA: ${prettifyData}`);


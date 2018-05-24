const { reduceDataTwo } = require('./data');

const processedData = reduceDataTwo.reduce((acc, curr) => {
  if(curr.hobby.length === 7) {
    acc = acc.concat(curr)
  }
  return acc;
}, []);

const prettifyData = JSON.stringify(processedData, null, 2);

console.log(`REDUCED DATA: ${prettifyData}`);


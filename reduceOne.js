const { reduceOneData } = require('./data');

const processedData = reduceOneData.reduce((acc, curr) => acc + curr, 0);

console.log(`REDUCED DATA: ${processedData}`);

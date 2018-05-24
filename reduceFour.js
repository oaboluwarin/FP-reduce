const { reduceDataThree } = require('./data');

const mapDataIntoObject = reduceDataThree.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

const prettifyData = JSON.stringify(mapDataIntoObject, null, 2);

console.log(`MAPPED DATA: ${prettifyData}`);

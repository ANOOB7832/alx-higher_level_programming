#!/usr/bin/node
const { argv } = require('node:process');
const procs = [];
const counts = [];
let firstVal = [];

argv.forEach((val, index) => {
  procs.push(val);
  counts.push(index);
  const remVals = [process.execPath, __filename];
  return (firstVal = procs.slice(2));
});

if (firstVal === __filename) {
  console.log('No argument');
} else {
  console.log(firstVal[0]);
}

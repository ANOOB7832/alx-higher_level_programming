#!/usr/bin/node
const { argv } = require('node:process');
const procs = [];

argv.forEach((val) => {
  procs.push(val);
});

const firstArg = Number(procs[procs.length - 1]);
if (Number.isNaN(firstArg) === false) {
  console.log(Number(firstArg));
} else {
  console.log('Not a number');
}

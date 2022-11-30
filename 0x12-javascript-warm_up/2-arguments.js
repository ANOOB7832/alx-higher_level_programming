#!/usr/bin/node
const { argv } = require('node:process');
const procs = [];

argv.forEach((val, index) => {
  procs.push(index);
});
if (procs.length > 3) {
  console.log('Arguments found');
} else if (procs.length > 2) {
  console.log('Argument found');
} else if (procs.length === 2) {
  console.log('No argument');
}

#!/usr/bin/node
const { argv } = require('node:process');
let counts = 0;

argv.forEach((val, index) => {
  counts += 1;
});
counts = counts - 2;
if (counts > 1) {
  console.log('Arguments found');
} else if (counts > 0) {
  console.log('Argument found');
} else if (counts === 0) {
  console.log('No argument');
}

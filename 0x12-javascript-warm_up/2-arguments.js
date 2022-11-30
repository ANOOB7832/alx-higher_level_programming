#!/usr/bin/node
const { argv } = require('node:process');
let counts = 0;

argv.forEach((val, index) => {
  counts += 1;
});
if (counts > 3) {
  console.log('Arguments found');
} else if (counts > 2) {
  console.log('Argument found');
} else if (counts === 2) {
  console.log('No argument');
}

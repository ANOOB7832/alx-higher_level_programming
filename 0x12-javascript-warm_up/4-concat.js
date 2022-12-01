#!/usr/bin/node
const { argv } = require('node:process');
const word = ' is ';
const procs = [];
let args = [];

argv.forEach((val, index) => {
  procs.push(val);
  args = procs;
});
console.log(args[2] + word + args[3]);

#!/usr/bin/node
const { argv } = require('node:process');
const procs = [];
let argNum = [];
let i = 1;

argv.forEach((val) => {
  procs.push(val);
  argNum = Number(procs[procs.length - 1]);
});

do {
  i = i + 1;
  console.log('C is fun');
} while (argNum >= i);

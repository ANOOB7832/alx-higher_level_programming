#!/usr/bin/node
const { argv } = require('node:process');
let i = 0;
let j = 0;
const procs = [];
let num = 0;
let sq = '';

argv.forEach((val) => {
  procs.push(val);
  num = Number(procs[procs.length - 1]);
  return num;
});

do {
  i = i + 1;
  sq = sq + 'X';
} while (i < num);

do {
  j = j + 1;
  console.log(sq);
} while (j < num);

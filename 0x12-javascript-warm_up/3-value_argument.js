#!/usr/bin/node
const { argv } = require('node:process');
let procs = [];
let counts = [];
let first_val = '';

argv.forEach((val, index) => {
    procs.push(val);
    counts.push(index);
    const rem_vals = [process.execPath, __filename];
    return (first_val = procs.pop(rem_vals));
    console.log(process.execArgv);
});

if (first_val == __filename) {
    console.log('No argument')
} else {
    console.log(first_val)
}

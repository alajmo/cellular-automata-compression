var fs = require('fs');
var rl = require('readline');
var colors = require('colors');
require('./src/init-console.js');
require('./src/run.js').run();

var rl = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

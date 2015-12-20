'use strict';

var u = require('./utils.js');
var p = require('./print-utils.js');

exports.render = function (state, stats) {
    var prevState = state['prevStates'][state['prevStates'].length - 1];

    console.reset();

    console.log('\n Run: '.bgBlack.white);
    console.log('\nStates:\n'.blue.underline);
    console.log(' initial:  ' + state['initState'].join(' '));
    console.log('previous:  ' + prevState.join(' '));
    console.log(' current:  ' + p.printArr(state['curState'], stats.diff).join(' '));
    console.log('    goal:  ' + state['goalState'].join(' '));
    console.log('\n-----------------------------------\n'.blue);
    console.log(' Stats: '.bgBlack.white);
    console.log('\n' + 'Step: '  + stats.step)
    console.log('Hamming Distance: ' + stats.hammingDistance);
    console.log('Frac: ' + (state['curState'].length - stats.hammingDistance) + '/' + state['curState'].length);
    console.log('Diff: ' + stats.hammingDistance / state['curState'].length);
    console.log('\n-----------------------------------\n'.blue);
    console.log(' Rules: '.bgBlack.white);
    console.log('\nR1 / R2');
};

exports.renderResults = function (success, msg) {
    console.log('\n-----------------------------------\n'.blue);
    console.log(' Results: '.bgBlack.white);
    console.log();
    console.log(msg);
    if (success) {
        console.log('\n' + 'Steps needed: '  + '55');
        console.log('\n' + 'Initial size: '  + '30 bits / 4 bytes');
        console.log('\n' + 'End size (excluding setup): '  + '1 bit');
        console.log('\n' + 'Total compression: '  + '30%');
    } else {

    }

};
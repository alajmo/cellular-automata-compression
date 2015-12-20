'use strict';

var s = require('./state-tree.js');
var r = require('./render.js');
var c = require('./calc.js');

var mainLoop;

exports.runSeq = function (state, pauseTime) {
    var stats = {step: 0};

    // Run Sequence.
    state["curState"] = state["initState"].slice();

    applyRule(state, stats);
    mainLoop = setInterval(() => applyRule(state, stats), pauseTime);
};


function applyRule(state, stats) {
    stats.step += 1;

    state["prevStates"].push(state["curState"].slice());

    // Apply Rule.
    var prevState = state['prevStates'][state['prevStates'].length - 1];
    s.applyRule(prevState, state["curState"]);

    // Collect stats.
    var calcStats = c.calcStats(state["curState"], state["goalState"]);
    stats['hammingDistance'] = calcStats['hammingDistance'];
    stats['diff'] = calcStats['diff'];

    // Render new state
    r.render(state, stats);

    // Check if finished.
    isFinished(state["prevStates"], state["curState"], state["goalState"]);
}


function isFinished(prevStates, curState, goalState) {
    if (curState.equals(goalState)) {
        r.renderResults(true, 'Goal reached!!!');
        clearInterval(mainLoop);
    } else {
        prevStates.forEach((obj) => {
            if (curState.equals(obj)) {
                r.renderResults(false, 'Converged without reaching goal state.');
                clearInterval(mainLoop);
            }
        });
    }
}

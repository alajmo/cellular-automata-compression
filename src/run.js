'use strict';

var s = require('./loop.js');

exports.run = function () {
    var state = {
        initState: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        prevStates: [],
        curState: [],
        goalState: [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
    };

    s.runSeq(state, 500);
};

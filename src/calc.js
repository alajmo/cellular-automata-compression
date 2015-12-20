'use strict';

var u = require('./utils.js');

exports.calcStats = function (v, w) {
    var hammingDistance = u.calcHammingDistance(v, w);
    var diff = u.arrDiff(v, w);

    return {
        hammingDistance: hammingDistance,
        diff: diff
    };
};

'use strict';

/**
* @desc Apply rule to change state.
* @param {Array} Previous state.
* @param {Array} Current state and the one that changes.
*/
exports.applyRule = function (prevState, curState) {
    var i;
    var l = curState.length;

    var stateTree = ruleRandom();
    var neigh;
    for (i = 0; i < l; i += 1) {
        neigh = determineNeighbours(i, l, prevState, 'circular');
        curState[i] = determineNextState(neigh, stateTree);
    }
};

/**
* @desc Determine next state of a cell.
* @param {array} State of neighbour cells.
* @returns {Number} The new state.
*/
var determineNextState = function (neigh, stateTree) {
    return stateTree[neigh];
};

/**
* @desc Determines neighbours.
* @param {Number} i Current cell.
* @param {Number} l Length of array.
* @param {Object} s State tree.
* @param {String} boundary How to treat cells at the
*   boundary [circular, dead].
* @returns {Array} neigh Neighbour states.
*/
var determineNeighbours = function (i, l, s, boundary) {
    var neigh = [0, 0, 0];
    if (boundary === 'circular') {
        circularBoundary(i, l, s, neigh);
    } else if ('dead') {
        deadBoundary(i, l, s, neigh);
    } else {
        deadBoundary(i, l, s, neigh);
    }
    neigh[1] = s[i];

    return neigh;
};


/**
* @desc
* @param {}
* @returns
*/
var circularBoundary = function (i, l, s, neigh) {
    if (i === 0) {
        // Left boundary.
        neigh[0] = s[l-1];
        neigh[2] = s[i + 1];
    } else if(i === (l - 1)) {
        // Right boundary.
        neigh[0] = s[i - 1];
        neigh[2] = s[0];
    } else {
        // Middle.
        neigh[0] = s[i - 1];
        neigh[2] = s[i + 1];
    }
}


/**
* @desc
* @param {}
* @returns
*/
var deadBoundary = function (i, l, s, neigh) {
    if (i === 0) {
        // Left boundary.
        neigh[0] = 0;
        neigh[2] = s[i + 1];
    } else if(i === (l - 1)) {
        // Right boundary.
        neigh[0] = s[i - 1];
        neigh[2] = s[0];
    } else {
        // Middle.
        neigh[0] = s[i - 1];
        neigh[2] = s[i + 1];
    }
}


/**
*
* @returns {Object} ruleOne
*/
var ruleRandom = function () {
    var ruleRandom = {};
    ruleRandom[[0, 0, 0]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[0, 0, 1]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[0, 1, 0]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[0, 1, 1]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[1, 0, 0]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[1, 0, 1]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[1, 1, 0]] = (Math.random()*10 < 5) ? 1 : 0;
    ruleRandom[[1, 1, 1]] = (Math.random()*10 < 5) ? 1 : 0;

    return ruleRandom;
};


/**
*
* @returns {Object} ruleOne
*/
var ruleOne = function () {
    var ruleOne = {};
    ruleOne[[0, 0, 0]] = 0;
    ruleOne[[0, 0, 1]] = 1;
    ruleOne[[0, 1, 0]] = 1;
    ruleOne[[0, 1, 1]] = 1;
    ruleOne[[1, 0, 0]] = 0;
    ruleOne[[1, 0, 1]] = 1;
    ruleOne[[1, 1, 0]] = 1;
    ruleOne[[1, 1, 1]] = 0;

    return ruleOne;
};

/**
*
* @returns {Object} ruleTwo
*/
var ruleTwo = function () {
    var ruleTwo = {};
    ruleTwo[[0, 0, 0]] = 1;
    ruleTwo[[0, 0, 1]] = 0;
    ruleTwo[[0, 1, 0]] = 0;
    ruleTwo[[0, 1, 1]] = 1;
    ruleTwo[[1, 0, 0]] = 1;
    ruleTwo[[1, 0, 1]] = 0;
    ruleTwo[[1, 1, 0]] = 0;
    ruleTwo[[1, 1, 1]] = 1;

    return ruleTwo;
};

/**
* @desc Get the State tree if doesn't exists, then build it.
* @param {object} State object.
* @returns {object} State tree.
*/
var getStateTree = function (s) {
    return buildStateTree(s);
};


/**
* @desc Build the state tree.
* @param {array} State tree array.
* @returns {object} State tree.
*/
var buildStateTree = function (s) {
    var stateTree = {};
};

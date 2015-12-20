'use strict';

exports.printArr = function (arrSeq, diff) {
    return arrSeq.map(function (i, j) {
        return (diff[j]) ? String(i).red : String(i).green;
    });
}

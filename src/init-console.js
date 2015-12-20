'use strict';

process.stdout.write('\x1Bc');
// process.stdout.write('\033[K');

console.reset = function () {
    // Clear all.
    process.stdout.write('\x1Bc');

    // Save where the cursor is.
    // process.stdout.write('\x1B[2J');
}

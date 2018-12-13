var fs = require('fs');

// Read, prepare and execute puzzle 
fs.readFile('puzzleinput.txt', 'utf8', function (err, puzzle) {

    const sequence = puzzle
        .split("\r\n")
        .map(i => parseInt(i));

    // Part 1
    console.log(sequence.reduce((result, nxtDelta) => result + nxtDelta, 0));

    // Part 2
    const foundFrequencies = new Array(10000000);  // "Bit"-Array is much faster than collecting and comparing the frequencies
    let lastFrequency = 0;
    let done = false;

    while (!done) {
        sequence.forEach(nxtDelta => {
            if (done) return;
            var nxtFrequency = lastFrequency + nxtDelta;
            if (foundFrequencies[nxtFrequency]) {
                done = true;
                console.log(nxtFrequency);
            } else {
                lastFrequency = nxtFrequency;
                foundFrequencies[nxtFrequency] = true;
            }
        });
    }
});


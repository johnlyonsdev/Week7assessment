const perf = require('execution-time')();

function findLongestWord(wordsArr) {
    let length = 0 
    for (i=0; i<wordsArr.length; i++) {
        if (wordsArr[i].length > length ) {
            length = wordsArr[i].length
        }
    }
    return length
}

perf.start();
findLongestWord(["hi", "hello", "goodbye"]);
let resultsTime = perf.stop();

console.log(resultsTime)

// This code takes roughly '151 μs' to run. Because the length of the for loop is determined only by the length of the input array, this code has a linear time and space complexity, or O(n)
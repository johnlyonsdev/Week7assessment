const perf = require('execution-time')();

function hasUniqueChars(word) {
    let unique = true
    for (let i =0; i <word.length; i++) {
        for (let j = 0; j <word.length; j++) {
           if (i !== j) {
                if (word[i] === word[j]) {
                    unique = false
                }
           }
        }
    }
    return unique
}

perf.start();
hasUniqueChars('Moonday');
let resultsTime = perf.stop();

console.log(resultsTime)

// This code takes roughly  0.1898 ms to run. Because of the nested for loop, this code features both quadratic space and time complexities.
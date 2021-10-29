const perf = require('execution-time')();

function isPangram(sentence) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let lowercase = sentence.toLowerCase()
    for (i=0; i <alpha.length; i++) {
       let test = false
        for(j=0; j<lowercase.length; j++) {
            if (alpha[i] === lowercase[j]) {
                test = true
                }
            }
            if (test === false) {
              return test
        }
    }
    return true
}

perf.start();
isPangram("The quick brown fox jumps over the lazy dog!");
let resultsTime = perf.stop();

console.log(resultsTime)

// This code takes roughly  350 μs ms to run. Because of the nested for loop, this code features both quadratic space and time complexities.
const perf = require('execution-time')();

function addToZero(numArr) {
    let zeroSum = false
    for (let i =0; i <numArr.length; i++) {
        for (let j = 0; j <numArr.length; j++) {
            let ans = numArr[i] + numArr[j]
            if (ans === 0) {
                zeroSum = true
            }
        }
    }
    return zeroSum
}

perf.start();
addToZero([1, 2, 3, -2]);
let resultsTime = perf.stop();


console.log(resultsTime)
// This code has a quadratic time complexity. It also has a quadratic space complexity. This is because this code features a nested for loop. This code will take roughly  0.2692 ms to run. 
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let totalPrimes = 0;
    
    for (let i = 2; i < n; i++) {
        let prime = true;
        for (let j = 2; j < Math.sqrt(i) + 1; j++) {
            if (i === 2) {
                break;
            }
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        totalPrimes += prime ? 1 : 0
    }
    
    return totalPrimes;
};
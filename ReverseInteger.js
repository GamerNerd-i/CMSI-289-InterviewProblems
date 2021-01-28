/**
 * @param {number} x
 * @return {number} 
 */

var reverse = function(x) {
    let input = (x < 0) ? (x*-1) : x;
    let output = 0;
    
    while (input != 0) {
        output *= 10;
        output += (input % 10);
        
        input -= input%10;
        input /= 10;
    }

    return (x < 0) ? (output*-1) : output;
};
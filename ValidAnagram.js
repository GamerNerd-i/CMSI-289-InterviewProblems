/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sSplit = s.split("").sort();
    let tSplit = t.split("").sort();
    
    for (let x = 0; x < s.length; x++) {
        if (sSplit[x] !== tSplit[x]) {
            return false;
        }
    }
        
    return true;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {    
    let maxAverage = 0;
    
    for (let i = 0; i < k; i++) {
      maxAverage += nums[i];
    }
    
    let currentAverage = maxAverage;
    
    for (let oldIndex = 0; oldIndex < (nums.length - k); oldIndex++) {
          currentAverage -= nums[oldIndex]
          currentAverage += nums[oldIndex + k]
          
          if (currentAverage > maxAverage) {
              maxAverage = currentAverage;
          }
      }
      
    return maxAverage/k;
  }
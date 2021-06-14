// Question 2
// Find the maximum consecutive 1's in an array of 0's and 1's.

var ConsecutiveOnes = function (nums) {
  var maxCount = 0;

  var count = 0;
  for (var i in nums) {
    count = nums[i] === 1 ? count + 1 : 0;
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
};

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

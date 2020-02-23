// https: // leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  nums = nums
    .sort(function(a, b) {
      return a - b;
    })
    .filter((item, index) => {
      return nums.indexOf(item) === index;
    });

  let streak = 1;
  let longestStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      streak++;
      if (streak > longestStreak) {
        longestStreak = streak;
      }
    } else {
      streak = 1;
    }
  }
  return longestStreak;
};

console.log(longestConsecutive([200, 4, 100, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 0, 1]));
console.log(longestConsecutive([9, 9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([]));

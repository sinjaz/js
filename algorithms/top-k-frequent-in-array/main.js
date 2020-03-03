// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (nums.length === 0) {
    return [];
  }

  let result = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    !result[num] ? (result[num] = 1) : result[num]++;
  }

  let sorted = Object.keys(result).sort((a, b) => {
    return result[b] - result[a];
  });

  sorted = sorted.map(e => {
    return Number(e);
  });

  return sorted.slice(0, k);
};

console.log(topKFrequent([3,2,2,3,3,4], 1));
console.log(topKFrequent([1], 1));
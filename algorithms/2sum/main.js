// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  let output = [];
  let i = 0;
  while (i < nums.length) {
    let a = nums[i];
    output[0] = i;
    
    for (let j = i+1; j < nums.length; j++) {
      let b = nums[j];
      if (a + b === target) {
        output[1] = j;
        break;
      }
    }

    if (output.length === 2) {
      break;
    }
    i++;
  }

  console.log(output);
};

console.log(twoSum([2, 7, 11, 15], 9));

// Loop through the numbers, starting from 0, while keeping a reference to that index
  // One by one, add it to all the elements that come after it
    // If the value matches target, return the index of that element
    // If not, move on to the next element in the array until you reach the end
  // If an element index was returned, add them both to an array and return it
  // If not, move on to the next element

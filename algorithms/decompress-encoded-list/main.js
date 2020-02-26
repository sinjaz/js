// https://leetcode.com/problems/decompress-run-length-encoded-list/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  // Create an empty ouput array
  // While nums is not empty
  // Remove the first element of the array and hold it in a variable freq
  // Remove the second element of the array and hold it in a variable val
  // Push the value of val into the output array, as many times as freq
  // return nums

  let output = [];
  while (nums.length > 0) {
    let freq = nums.splice(0, 1)[0];
    let val = nums.splice(0, 1)[0];
    while (freq > 0) {
      output.push(val)
      freq--;
    }
  }
  return output;
};

let input = [1, 2, 3, 4];
let output = decompressRLElist(input);
console.log(output);
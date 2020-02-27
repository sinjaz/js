// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  // Create an empty output array
  // For each element at index (i) in array A
  // If the element is even, push it to the beginning of the output array
  // If the element is odd, push it to the end of the output array 
  // Return output array

  let output = [];
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (num % 2 === 0) {
      output.unshift(num);
    } else {
      output.push(num);
    }
  }

  return output;
};

let input = [3, 1, 2, 4];
console.log(sortArrayByParity(input));
// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    console.log(i % 3);
    if ((i+1) % 15 === 0) {
      result.push("fizzbuzz");
    } else if ((i+1) % 3 === 0) {
      result.push('fizz');
    } else if ((i+1) % 5 === 0) {
      result.push("buzz");
    } else {
      result.push((i+1).toString());
    }
  }

  return result;
};

console.log(fizzBuzz(1));
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let output = [];
  let i = digits.length-1;
  let carryOver = true;
  while (i >= 0 || carryOver) {
    let digit = digits[i] || 0;
    console.log(digit);

    if (!carryOver) {
      output.unshift(digit);
    } else { 
      digit = digit+1;
      if (digit < 10) {
        output.unshift(digit);
        carryOver = false;
      } else {
        output.unshift(0);
      }
    }

    i--;
  }

  return output;
};

const input = [8,9];
const output = plusOne(input);
console.log(output);
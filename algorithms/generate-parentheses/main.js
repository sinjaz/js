// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // Create an output array to push all the possibilities into
  // Create a function (addParen) that will take a prebuilt partial string and the number of opening and closing parenthesis left to use
    // If there are any opening parenthesis left, add one to the string and call the function recursively
    // If there are any closing parenthesis left, as long as the number of closing parenthesis is higher than opening ones, add one to the string and call the function recursively.
    // If there are no more parenthesis left, it must mean the string has used all 6 parenthesis, so add it to the output array
  // Return the output array

  let output = [];
  function addParent(string, opening, closing) {
    if (opening > 0) {
      addParent(string + '(', opening - 1, closing);
    }

    if (closing > 0 && closing > opening) {
      addParent(string + ')', opening, closing - 1);
    }

    if (opening === 0 && closing === 0) {
      output.push(string);
    }
  }

  addParent('', n, n);

  return output;
};

console.log(generateParenthesis(2));
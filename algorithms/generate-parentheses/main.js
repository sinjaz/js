/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let all = [];

  function build(all, string = '', left, right) {
    if (left === 0 && right === 0) {
      all.push(string);
    }

    if (left > 0) {
      build(all, string + "(", left - 1, right);
    }

    if (right > 0 && right > left) {
      build(all, string + ")", left, right - 1);
    }
  }
  build(all, '', n, n);

  return all;
};

console.log(generateParenthesis(3));




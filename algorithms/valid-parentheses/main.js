// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = [];

  for (let i = 0; i < s.length; i++) {
    let thisChar = s.charAt(i);
    if (thisChar === '(' || thisChar === '[' || thisChar === '{') {
      map.push(thisChar);
    }

    if (thisChar === ')') {
      if (map.indexOf('(') === -1) {
        return false;
      } else {
        map.splice(map.indexOf('('));
      }
    }

    if (thisChar === '}') {
      if (map.indexOf('{') === -1) {
        return false;
      } else {
        map.splice(map.indexOf('{'));
      }
    }
  }

  if (map.length > 0) {
    return false;
  }
  return true
};

console.log(isValid('())'));
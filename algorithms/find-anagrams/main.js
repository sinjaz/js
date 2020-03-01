// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // Create an empty array (output) that will include all indeces of found anagrams
  // Loop through the string (s) starting from i=0
  // Create a substring (ss) with the length of p
  // Loop through p, do all characters of p exist in ss
  // If yes, we found an anagram, add i to output
  // Increment i by 1
  // return output

  let output = [];

  let length = s.length

  if (s.length < p.length) {
    return output;
  }

  if (s.length > p.length) {
    length = s.length - p.length + 1;
  }

  for (let i = 0; i < length; i++) {
    let ss = s.substr(i, p.length).split('').sort();
    
    let found = true;
    let pp = p.split('').sort();

    for (let j = 0; j < pp.length; j++) {
      if (pp[j] !== ss[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      output.push(i);
    }
  }

  return output;
};

console.log(findAnagrams("cbaebabacd", "abc"));












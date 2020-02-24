// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let visitedArray = [];
  let chars = s.split('');

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    const charFoundAt = visitedArray.lastIndexOf(currentChar);
    if (charFoundAt !== -1) {
      visitedArray.splice(0, charFoundAt + 1);
    }
    
    visitedArray.push(currentChar);

    if (visitedArray.length > longest) {
      longest = visitedArray.length;
    }
  }

  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 - abc
console.log(lengthOfLongestSubstring('bbbb')); // 1 - b
console.log(lengthOfLongestSubstring('pwwkew')); // 3 - kew

// Keep track of longest streak, start with 0
  // Keep track of the visited characters, start with empty array
  // break the string into seperate elements
  // walk through the elements, from 0 to n-1
  // does the visitedArray include this character?
    // NO - Add character to the array
    // YES
      // is the length of the array bigger than the longest streak?
        // YES - set longest streak to the length of the array
        // NO - Do nothing
      // clear the array
      // add character to the array
  // Return the value of longest streak
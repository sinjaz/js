// https://leetcode.com/problems/longest-palindromic-substring/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // Keep track of longest palindrome in variable (longest), set to 0
  // Loop through (s) characters starting at index 0
  // Set (start) index to i
  // Set (end) index to i + length of (longest)
  // Is the string between (start) and (end) indeces a palindrome?
  // YES - increment end index by 1
  // NO - increment start index by 1, increment end index by 1
  // For both (start) and (end), only increment by 1 if they haven't reached (n)

  let longest = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j >= i + 1 + longest.length; j--) {
      let current = s.substring(i, j);
      if (isPalindrome(current)) {
        longest = current;
      }
    }
  }

  function isPalindrome(string) {
    let i = 0;
    while (i < string.length / 2) {
      if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
        return false;
      }
      i++
    }
    return true;
  }

  return longest;
};

let input = 'abbajghewf';
console.log(longestPalindrome(input));
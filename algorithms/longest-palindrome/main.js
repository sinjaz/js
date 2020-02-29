// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // Loop through the string,
  // find characters that are repeated even times times and add them to (evens) array
  // find characters that are repeated odd times, keep track of the longest one by holding the value in a temp 'longestOdd' variable
  // The longest string can be calculated by the number of even numbers * 2 + the length of the longestOdd number
  // Return the longest string;

  let map = {};
  let evens = 0;
  let odds = 0;
  let foundOdd = false
  let ar = s.split('');
  for (let i in ar) {
    let char = ar[i];
    if (map[char] === undefined) map[char] = 1;
    else map[char]++;
  }

  console.log(map);
  for (let c in map) {
    if (map[c] % 2 == 0){
      evens = evens + map[c];
    } else {
      odds = odds + map[c] - 1;
      foundOdd = true;
    }
  }

  if (foundOdd) odds++;

  return evens + odds;
};
  
let input = 'abccccddaaaabb';
console.log(longestPalindrome(input));
// https://leetcode.com/problems/merge-intervals/submissions/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0] && a[1] < b[1]){
      return -1;
    }
    return 1;
  });

  let output = [];
  for (let i = 0; i < intervals.length; i++) {
    let b = intervals[i];
    let a = output[output.length - 1];
    if (a && b[0] <= a[1]) {
      a[1] = Math.max(a[1], b[1]);
    } else {
      output.push(b);
    }
  }
  return output;
};

let ar = [[1, 3], [2, 6], [8, 10], [15, 18]];// [[1,6],[8,10],[15,18]]
// let ar = [[1, 4], [2, 3]];
let result = merge(ar);
console.log(result);

// Create a new OUTPUT array that holds the merge
    // For each element of the input array (a)
      // Compare to all elements of the output array (b)
      // look for overlap between elements (a) and (b):
        // if a[0] <= b[0] && a[1] >= b[0]
        // OR
        // if a[0] > b[0] && a[0] < b[1]
          // Merge the two arrays by
            // Push the smaller of the two low numbers into (a)
              // Math.min(a[0], b[0]);
            // Push the larger of the two high numbers into (a)
              // Math.max(a[1], b[1])
      // If no overlap found: Push (b) into output array

  // Return the OUTPUT array
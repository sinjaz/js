// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let output = 0;

  let topSkyline = [];
  let rightSkyline = [];

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
      if (rightSkyline[i] === undefined || rightSkyline[i] < col) {
        rightSkyline[i] = col;
      }

      if (topSkyline[j] === undefined || topSkyline[j] < col) {
        topSkyline[j] = col;
      }
    }
  }

  console.log(topSkyline);
  console.log(rightSkyline);

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
      let diffInRow = 0;
      let diffInCol = 0;
      output += Math.max(Math.min(topSkyline[j] - col, rightSkyline[i] - col), 0);
    }
  }

  // Find top skyline and right skyline by 
    // creating a new <topSkyline: array>
    // creating a new <rightSkyline: array>
    // walking through the grid array
      // go through each row,
      // Is topSkyline at this index empty OR is the current number higher than the number inside topSkyline at this index
        // YES - push this number into topSkyline array at this index.
        // NO - do nothing.

        // go through each index of the row
          // Is rightSkyline at this index empty OR is the current number higher than the number inside rightSkyline at this index?
            // YES - push this number into the rightSkyline at this index.
            // NO - do nothing


  // Once we have the skylines...
  // For each row
    // For each column
      // Find the difference between that building and the highest number from rightSkyline using the row index
      // Find the difference between that building and the highest number from the topSkyline using the column index
      // Whichever number is smaller, that is the allowed number of stories it can increase by, so increase the output by that much
  
  // Return the output number
  return output;
};

let input = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];

// [3, 0, 8, 4]
// [2, 4, 5, 7]
// [9, 2, 6, 3]
// [0, 3, 1, 0]

let output = maxIncreaseKeepingSkyline(input);
console.log(output);










// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  // Save the value of the highest hourglass in variable (highest), set to 0;
  // Find the beginning of each hourglass
  // Loop through the arr start from 0 to 4 (n)
    // Loop through arr[n] start from 0 to 4 (m)
    // Once you found the beginning of the hourglass, 
      // Save the value of the total for this hourglass in variable (total), set to 0;
      // add the value of all the hourglass elements to total by visit the following elements:
        // n,m - n,m+1 - n,m+2 - n+1,m+1 - n+2,m - n+2,m+1 - n+2,m+2
      // If the value of (total) is larger than (highest), set (highest) to (total)

  // Return highest

  let highest = Number.MIN_SAFE_INTEGER;
  for (let n = 0; n < 4; n++) {
    for (let m = 0; m < 4; m++) {
      let total = arr[n][m] + 
                  arr[n][m+1] + 
                  arr[n][m+2] + 
                  arr[n+1][m+1] + 
                  arr[n+2][m] + 
                  arr[n+2][m+1] + 
                  arr[n+2][m+2];
      
      if (total > highest) {
        highest = total;
      }
    }
  }

  return highest;
}

// let array = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]];

let array = [
[-1, -1,  0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5],
  ]

console.log(hourglassSum(array));
// https://leetcode.com/problems/number-of-islands/


var numIslands = function (grid) {
  // Start walking the grid by iterating through rows i and columns j
  // Inspect each element.
    // if element is 0, move on
    // if element is -1, move on
    // if element is 1, FOUND AN ISLAND
      // increment islands by 1
      // Mark it as visited
      // repeat his process for its neighbors, top, right, bottom, left, without incrementing the number of islands.

  // return number of islands

  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      isIsland(i, j) ? islands++ : null;
    }
  }

  function isIsland(i, j) {
    if (!grid[i] || !grid[i][j]) {
      return false;
    }

    if (grid[i][j] === '1') {
      grid[i][j] = -1;
      isIsland(i - 1, j, false);
      isIsland(i, j + 1, false);
      isIsland(i + 1, j, false);
      isIsland(i, j - 1, false);
      return true;
    } else {
      return false;
    }
  }

  return islands;
};

const input = [
['1','1','1','1','0'],
['1','1','0','1','0'],
['1','1','0','0','0'],
['0','0','0','1','0']
]

console.log(numIslands(input));
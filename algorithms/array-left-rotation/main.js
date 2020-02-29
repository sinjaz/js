// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the rotLeft function below.
function rotLeft(a, d) {
  // Loop from 0 to (d-1)
  // Take unshift the first element of the array and push it to the end

  d = d % a;
  for (let i = 0; i < d; i++) {
    let temp = a.shift(0);
    a.push(temp);
  }
  return a;
}

console.log(rotLeft([1,2,3,4,5], 9));
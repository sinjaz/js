function mergeTwo() {
  let output = [];

  let i = 0;
  let max = Math.max(ar1.length, ar2.length);
  while (i < max) {
    output.push(Math.min(ar1[i], ar2[i]));
    output.push(Math.max(ar1[i], ar2[i]));

    i++;
  }

  return output;
}

let ar1 = [1, 3, 5, 7, 8, 9];
let ar2 = [1, 2, 4, 6, 7, 10];

console.log(mergeTwo(ar1, ar2));
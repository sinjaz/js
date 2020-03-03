function quickSort(ar) {

  if (ar.length < 2) return ar;

  let pivotIndex = Math.floor(ar.length/2);
  let pivot = ar[pivotIndex];
  let smaller = [];
  let larger = [];

  for (let i in ar) {
    if (i != pivotIndex) {
      ar[i] > pivot ? larger.push(ar[i]) : smaller.push(ar[i]);
    }
  }

  return [
    ...quickSort(smaller),
    pivot,
    ...quickSort(larger)
  ]
}

console.log(quickSort([1,5,22,3,2,8,9]));
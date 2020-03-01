/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length === 0) {
    this.nums.push(val);
    return val;
  }

  let i = -1;
  while (i < this.nums.length) {
    if (this.nums[i + 1] < val || this.nums[i + 1] === undefined) {
      this.nums.splice(i+1, 0, val);
      break;
    }
    i++;
  }

  return this.nums[this.k-1];
};


var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));  // 4 
console.log(obj.add(5));  // 5
console.log(obj.add(10)); // 5
console.log(obj.add(9));  // 8 
console.log(obj.add(4));  // 8 
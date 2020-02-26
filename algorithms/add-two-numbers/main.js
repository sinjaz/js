// https://leetcode.com/problems/add-two-numbers/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = decode(l1)
  let num2 = decode(l2)
  let sum = num1 + num2
  let encodedSum = encode(sum)
  return encodedSum
};

var decode = function (l) {
  let curNode = l;
  let ar = []
  while (curNode != null) {
    ar.push(curNode.val)
    curNode.next ? curNode = curNode.next : curNode = null
  }

  return parseInt(ar.reverse().join(''))
}

var encode = function (num) {
  return num.toString().split('').reverse().map(a => parseInt(a))
}
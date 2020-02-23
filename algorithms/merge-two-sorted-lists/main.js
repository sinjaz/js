// https://leetcode.com/problems/merge-two-sorted-lists/

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
var mergeTwoLists = function (l1, l2) {

  let collection;
  let l1HasMore = true;
  let l2HasMore = true;

  let previousChosenOne = {};
  while (l1HasMore || l2HasMore) {

    let chosenOne;
    if (l1 === null) { l1 = -1 };
    if (l2 === null) { l2 = -1 };
    if (l1.val <= l2.val) {
      if (l1.next === null) {
        l1HasMore = false;
      }
      chosenOne = l1;
      let remainingL1 = l1.next;
      chosenOne.next = null;
      l1 = remainingL1;
    } else {
      if (l2.next === null) {
        l2HasMore = false;
      }
      chosenOne = l2;
      let remainingL2 = l2.next;
      chosenOne.next = null;
      l2 = remainingL2;
    }

    if (previousChosenOne) {
      previousChosenOne.next = chosenOne;
    }
    previousChosenOne = chosenOne;

    if (!collection) {
      collection = chosenOne;
    }
  }

  console.log('--- COLLECTION ---');
  let hasMore = true;
  let currentNode = collection;
  while (hasMore) {
    if (currentNode.next === null) {
      hasMore = false;
    }
    console.log(currentNode.val)
    currentNode = currentNode.next;
  }
  console.log(collection);
  return collection;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1_1 = new ListNode(1);
let l1_2 = new ListNode(2);
let l1_3 = new ListNode(4);
l1_1.next = l1_2;
l1_2.next = l1_3;

let l2_1 = new ListNode(1);
let l2_2 = new ListNode(3);
let l2_3 = new ListNode(4);
l2_1.next = l2_2;
l2_2.next = l2_3;
mergeTwoLists(l1_1, l2_1);












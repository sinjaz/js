// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0;
  // Traverse the tree starting from the far right node (highest numbers)
  // Keep track of the highest input in a variable (sum)
  // For every node you run into increase its value by sum
  // Overwrite the value of sum to the new value of the node
  // Move on to the next node
  // Return the tree

  function traverseTree(node) {
    node.right && traverseTree(node.right);
    sum += node.val;
    node.val = sum;
    node.left && traverseTree(node.left);
  }
  traverseTree(root);

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);

bstToGst(root);
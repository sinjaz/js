/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let levels = [];
  function traverseTree(node, level) {
    if (!node) {
      return null
    }
    
    if (levels[level] === undefined) {
      levels[level] = node.val;
    } else if (levels[level] < node.val) {
      levels[level] = node.val;
    }

    traverseTree(node.left, level + 1);
    traverseTree(node.right, level + 1);
  }

  traverseTree(root, 0);
  return levels;
};

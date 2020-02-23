/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const inOrder = [];
  const postOrder = [];
  const traverseTree = function(node) {
    inOrder.push(node.val);

    if (node.left) {
      traverseTree(node.left);
    } else {
      inOrder.push(null);
      postOrder.push(null);
    }

    if (node.right) {
      traverseTree(node.right);
    } else {
      inOrder.push(null);
      postOrder.push(null);
    }

    postOrder.push(node.val);
  }
  traverseTree(root);

  let equal = true;
  let postOrderReverse = postOrder.reverse();
  for (let i = 0; i < inOrder.length; i++) {
    if (inOrder[i] !== postOrderReverse[i]) {
      equal = false;
    }
  }

  return equal;
};





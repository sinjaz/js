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
var rightSideView = function(root) {
  if (!root) { 
    return [];
  }

  let q = [root];
  let result = [];

  while(q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      
      if (node.left) {
        q.push(node.left);
      }
      
      if (node.right) {
        q.push(node.right);
      }
      
      if (i === size - 1) {
        result.push(node.val);
      }
    }
  }

  return result;
};


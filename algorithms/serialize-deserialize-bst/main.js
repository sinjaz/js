/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '';

  let left = serialize(root.left);
  let right = serialize(root.right);
  return '' + root.val + (left ? ' ' + left : left) + (right ? ' ' + right : right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let values = data.split(' ');

  let index = {};
  index.value = 0;

  function decodeNode(index, min = -999999999, max = 999999999) {
    let val = values[index.value];
    let node = null;

    if (index.value >= values.length || val < min || max < val) {
      return null;
    }

    node = new TreeNode(parseInt(val));
    index.value++;

    node.left = decodeNode(index, min, val);
    node.right = decodeNode(index, val, max);

    return node;
  }

  return decodeNode(index);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// let left1 = new TreeNode(3);
// let left2 = new TreeNode(6);

// let right1 = new TreeNode(4);
// let right2 = new TreeNode(7);

let left  = new TreeNode(2);
let right = new TreeNode(5);

let head = new TreeNode(1, left, right);
console.log(head);
console.log('------------');
let serialized = serialize(head);
console.log('SERIALIZED: ', serialized);

let deserialized = deserialize(serialized);
console.log('DESERIALIZED: ', deserialized);
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const traverse = (p, q) => {
    if (p === null && q === null) {
      return true;
    }
    if ((p !== null && q === null) || (q !== null && p === null)) {
      return false;
    }
    if (p.val !== q.val) {
      return false;
    }
    return traverse(p.left, q.left) && traverse(p.right, q.right);
  };

  return traverse(p, q);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

tree1 = new TreeNode(1, new TreeNode(2));
tree2 = new TreeNode(1, undefined, new TreeNode(3));

console.log(isSameTree(tree1, tree2));

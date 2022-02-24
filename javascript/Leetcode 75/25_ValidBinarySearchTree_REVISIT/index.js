/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root, min, max) {
  if (!root) {
    return true;
  }

  if (min !== undefined && root.val <= min) {
    return false;
  }

  if (max !== undefined && root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

var isValidBSTInOrder = function (root) {
  function inOrder(node) {
    if (!node) return [];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)];
  }

  const sortedArr = inOrder(root);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] <= sortedArr[i]) return false;
  }
  return true;
};

// [5,4,6,null,null,3,7]
// const testTree = new TreeNode(
//   5,
//   new TreeNode(4),
//   new TreeNode(6, new TreeNode(3), new TreeNode(7))
// );
// const testTree = new TreeNode(
//   2,
//   new TreeNode(2),
//   new TreeNode(2)
// );

// [32,26,47,19,null,null,56,null,27]

//             32
//     26              47
// 19                      56
//   27

const testTree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// const testTree = new TreeNode(
//   32,
//   new TreeNode(26, new TreeNode(19, undefined, new TreeNode(27))),
//   new TreeNode(47, undefined, new TreeNode(56))
// );

console.log(isValidBST(testTree));

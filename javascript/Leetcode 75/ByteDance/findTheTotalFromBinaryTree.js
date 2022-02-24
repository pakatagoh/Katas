/*
Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer 
and each internal node is one of "+", "−", "∗", or "/".
Given the root to such a tree, write a function to evaluate it.
For example, given the following tree:
    *
   / \
  +   +
 / \ / \
3  2 4  5
You should return 45, as it is (3 + 2) * (4 + 5).
If the value is a decimal, round the decimal to the nearest floor. For example, if the value is 3.67, you should return 3.
Example:
*/

const root = {
  val: '*',
  left: {
    val: '+',
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: '+',
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};
// from the root,
// arrive at leaf = left and right null
// return the value

//  return result = recurs(left) operator = value that is not a number recurs(right)

const calc = (root) => {
  if (root.left === null && root.right === null) {
    return root.val;
  }

  let result;
  switch (root.val) {
    case '-':
      result = Math.floor(calc(root.left) - calc(root.right));
      break;
    case '+': {
      result = Math.floor(calc(root.left) + calc(root.right));
      break;
    }
    case '*':
      result = Math.floor(calc(root.left) * calc(root.right));
      break;
    case '/':
      result = Math.floor(calc(root.left) / calc(root.right));
  }

  return result;
};

console.log(calc(root));

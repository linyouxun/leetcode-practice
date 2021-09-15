/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//   if (!root) return true;
//   var queue = [root.left, root.right];
//   while (queue.length > 0) {
//     var left = 0,
//       right = queue.length - 1,
//       q = [];
//     while (left < right) {
//       var leftNode = queue[left++];
//       var rightNode = queue[right--];
//       if (
//         (leftNode === null && rightNode === null) ||
//         (leftNode && rightNode && leftNode.val === rightNode.val)
//       ) {
//         if (rightNode) {
//           q.push(rightNode.left);
//           q.push(rightNode.right);
//         }
//         if (leftNode) {
//           q.unshift(leftNode.right);
//           q.unshift(leftNode.left);
//         }
//       } else {
//         return false;
//       }
//     }
//     queue = q;
//   }
//   return true;
// };
var isSymmetric = function (root) {
  if (!root) return true;
  function check(left, right) {
    if (left === null && right === null) return true;
    if (left && right && left.val === right.val) {
      return check(left.left, right.right) && check(left.right, right.left);
    }
    return false;
  }
  var status = check(root.left, root.right);
  return status;
};
// @lc code=end

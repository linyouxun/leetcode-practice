/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  var val = postorder.pop();
  var node = new TreeNode(val);
  var left = [],
    right = [],
    flag = true;
  for (var i = 0; i < inorder.length; i++) {
    if (inorder[i] !== val) {
      if (flag) {
        left.push(inorder[i]);
      } else {
        right.push(inorder[i]);
      }
    } else {
      flag = false;
    }
  }
  node.right = right.length > 0 ? buildTree(right, postorder) : null;
  node.left = left.length > 0 ? buildTree(left, postorder) : null;
  return node;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  var val = preorder.shift();
  var node = new TreeNode(val);
  var left = [];
  var right = [];
  var flag = true;
  for (var i = 0; i < inorder.length; i++) {
    if (val !== inorder[i]) {
      if (flag) {
        left.push(inorder[i]);
      } else {
        right.push(inorder[i]);
      }
    } else {
      flag = false;
    }
  }
  node.left = left.length > 0 ? buildTree(preorder, left) : null;
  node.right = right.length > 0 ? buildTree(preorder, right) : null;
  return node;
};
// @lc code=end

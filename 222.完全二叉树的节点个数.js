/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  var queue = [root];
  var height = 0;
  while (true) {
    var q = [];
    for (var i = 0; i < queue.length; i++) {
      var n = queue[i];
      if (n) {
        q.push(n.left, n.right);
      } else {
        return Math.pow(2, height) + i - 1;
      }
    }
    height++;
    queue = q;
  }
};
// @lc code=end

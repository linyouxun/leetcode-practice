/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

const { list } = require("postcss");

// @lc code=start
/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1.val === 0) return l2;
  if (l2.val === 0) return l1;
  var stack1 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  var stack2 = [];
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  var flag = 0;
  var head = new ListNode(0);
  while (flag > 0 || stack1.length > 0 || stack2.length > 0) {
    var num1 = stack1.pop() || 0;
    var num2 = stack2.pop() || 0;
    var sum = flag + num1 + num2;
    flag = sum > 9 ? 1 : 0;
    sum %= 10;
    var node = new ListNode(sum, head.next);
    head.next = node;
  }
  return head.next;
};
// @lc code=end

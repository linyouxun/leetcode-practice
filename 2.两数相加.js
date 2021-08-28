/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var flat = 0;
  var head = new ListNode(0);
  var list = head;
  while (l1 && l2) {
    var val = l1.val + l2.val + flat;
    flat = (val / 10) | 0;
    val -= flat * 10;
    var node = new ListNode(val);
    list.next = node;
    l1 = l1.next;
    l2 = l2.next;
    list = node;
  }
  while (l1) {
    var val = l1.val + flat;
    flat = (val / 10) | 0;
    val -= flat * 10;
    var node = new ListNode(val);
    list.next = node;
    l1 = l1.next;
    list = node;
  }
  while (l2) {
    var val = l2.val + flat;
    flat = (val / 10) | 0;
    val -= flat * 10;
    var node = new ListNode(val);
    list.next = node;
    l2 = l2.next;
    list = node;
  }
  if (flat) {
    var node = new ListNode(flat);
    list.next = node;
  }
  return head.next;
};
// @lc code=end

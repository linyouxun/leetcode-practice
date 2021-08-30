/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  var node = new ListNode(0, head);
  var left = node;
  var right = node.next;
  while (right && right.next) {
    var n = right.next.next;
    left.next = right.next;
    left.next.next = right;
    right.next = n;

    left = left.next.next;
    right = right.next;
  }
  return node.next;
};
// @lc code=end

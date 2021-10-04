/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var p = head;
  var p2 = head;
  var index = 0;
  while (p2 && p2.next && p2.next.next) {
    p = p.next;
    p2 = p2.next.next;
    if (p === p2) {
      p = head;
      while (p !== p2) {
        p = p.next;
        p2 = p2.next;
      }
      return p;
    }
  }
  return null;
};
// @lc code=end

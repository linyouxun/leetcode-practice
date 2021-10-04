/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  var p = head;
  var p2 = head;
  while (p2 && p2.next && p2.next.next) {
    p = p.next;
    p2 = p2.next.next;
    if (p === p2) {
      return true;
    }
  }
  return false;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var node = head;
  var node2 = head;
  while (n--) {
    node = node.next;
  }
  if (!node) {
    return head.next;
  }
  while (node) {
    node = node.next;
    if (!node) {
      node2.next = node2.next.next;
    } else {
      node2 = node2.next;
    }
  }
  return head;
};
// @lc code=end

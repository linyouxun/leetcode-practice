/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var head = new ListNode(0);
  if (lists.length === 0) return head.next;
  var prev = head;
  var nodes = lists;
  while (nodes.filter(Boolean).length > 0) {
    var currentNum = Infinity;
    nodes.forEach((ele) => {
      if (!!ele && ele.val < currentNum) {
        currentNum = ele.val;
      }
    });
    nodes = nodes.map((ele) => {
      if (!!ele && ele.val === currentNum) {
        prev.next = ele;
        ele = ele.next;
        prev = prev.next;
        prev.next = null;
        return ele;
      }
      return ele;
    });
  }
  return head.next;
};
// @lc code=end

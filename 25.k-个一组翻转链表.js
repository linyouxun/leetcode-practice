/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function (head, k) {
//   var nodeHead = new ListNode(0, head);
//   var h = nodeHead;
//   var flag = true;
//   while (flag) {
//     var node = new ListNode(0);
//     var h2 = h;
//     for (var i = 0; i < k; i++) {
//       if (h.next) {
//         var tmp = node.next;
//         node.next = h;
//         h = h.next;
//         node.next.next = tmp;
//       } else {
//         flag = false;
//       }
//     }
//     if (flag) {
//       h2.next = node;
//       node.next = h.next;
//     }
//   }
//   return nodeHead.next;
// };

var reverseKGroup = function (head, k) {
  if (!head) return null;
  var tail = head;
  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
};

function reverse(head) {
  var prev = null;
  while (head) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
}
// @lc code=end

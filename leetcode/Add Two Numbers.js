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
   let sum = 0;
   const arr = [];
   let digit = 0;

   while (l1 || l2 || digit) {
      sum = digit + (l1?.val ?? 0) + (l2?.val ?? 0);
      arr.push(sum % 10);
      digit = Math.floor(sum / 10);
      l1 = l1?.next;
      l2 = l2?.next;
   }

   arr.reverse();

   let obj = {};
   let ans = obj;

   for (let i = arr.length; i >= 0; i--) {
      obj.next = new ListNode(arr[i]);
      obj = obj.next;
   }
   return ans.next.next;
};

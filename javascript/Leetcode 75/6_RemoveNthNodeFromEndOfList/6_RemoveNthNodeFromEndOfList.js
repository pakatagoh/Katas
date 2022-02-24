function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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
  let fast = head,
    slow = head;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  if (!fast) {
    head = head.next;
  } else {
    slow.next = slow.next ? slow.next.next : null;
  }
  return head;
};

var removeNthFromEndWithDummy = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let idx = 0; idx < n; idx++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

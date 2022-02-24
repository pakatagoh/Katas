/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let listOneHead = list1;
  let listTwoHead = list2;

  if (!listOneHead && listTwoHead) {
    return listTwoHead;
  }
  if (!listTwoHead && listOneHead) {
    return listOneHead;
  }
  if (!listOneHead && !listTwoHead) {
    return null;
  }

  const newList = new ListNode();
  let newListHead = newList;

  while (listOneHead && listTwoHead) {
    if (listOneHead.val < listTwoHead.val) {
      newListHead.next = listOneHead;
      newListHead = newListHead.next;
      listOneHead = listOneHead.next;
    } else {
      newListHead.next = listTwoHead;
      newListHead = newListHead.next;
      listTwoHead = listTwoHead.next;
    }
  }
  if (listOneHead) {
    newListHead.next = listOneHead;
  }
  if (listTwoHead) {
    newListHead.next = listTwoHead;
  }

  return newList.next;
};

const mergeTwoListsRecursive = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    return l2;
  }
};

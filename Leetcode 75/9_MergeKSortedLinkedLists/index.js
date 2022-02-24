function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }

  while (lists.length > 1) {
    const mergedList = mergeTwoLists(
      lists[lists.length - 1],
      lists[lists.length - 2]
    );
    lists.pop();
    lists.pop();
    lists.push(mergedList);
  }

  return lists[0];
};

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  const dummy = new ListNode();
  let dummyHead = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummyHead.next = list1;
      dummyHead = dummyHead.next;
      list1 = list1.next;
    } else {
      dummyHead.next = list2;
      dummyHead = dummyHead.next;
      list2 = list2.next;
    }
  }

  if (!list1) {
    dummyHead.next = list2;
  } else {
    dummyHead.next = list1;
  }

  return dummy.next;
};

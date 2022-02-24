function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

const DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.push = function (key, value) {
    const newNode = new Node(key, value);

    this.length++;

    if (this.tail === null) {
      // no head and no tail. List is empty
      this.head = newNode;
      this.tail = newNode;

      return newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return newNode;
  };
  this.remove = function (node) {
    this.length--;

    if (node.prev === null && node.next === null) {
      // list only has 1 node
      this.head = null;
      this.tail = null;
      return;
    }
    if (node.prev === null) {
      // node is head
      this.head = node.next;
      this.head.prev = null;
      return;
    }
    if (node.next === null) {
      // node is tail
      this.tail = node.prev;
      this.tail.next = null;
      return;
    }
    // node is in between somewhere
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;

    return;
  };
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cacheMap = {};
  this.list = new DoublyLinkedList(capacity);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cacheMap[key] === undefined) {
    return -1;
  }

  const foundNode = this.cacheMap[key];
  const valueToReturn = foundNode.value;

  // remove from list
  this.list.remove(foundNode);

  // add to back of list and receive new node
  const newNode = this.list.push(key, valueToReturn);

  // add new reference
  this.cacheMap[key] = newNode;

  return valueToReturn;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cacheMap[key] !== undefined) {
    // remove key from list
    this.list.remove(this.cacheMap[key]);
  }

  // add to back of list
  const newNode = this.list.push(key, value);
  // store in cacheMap
  this.cacheMap[key] = newNode;

  // check if exceed capacity
  if (this.list.length > this.capacity) {
    // exceed capacity, remove from the head as head represents LRU cache item
    // delete from cacheMap
    const keyToDelete = this.list.head.key;
    delete this.cacheMap[keyToDelete];
    // remove from list
    this.list.remove(this.list.head);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
//  [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]

// expected [null,null,null,null,null,4,3,2,-1,null,-1,2,3,-1,5]

lRUCache1 = new LRUCache(3);
console.log(lRUCache1);
console.log(lRUCache1.put(1, 1));
console.log(lRUCache1.put(2, 2));
console.log(lRUCache1.put(3, 3));
console.log(lRUCache1.put(4, 4));
console.log(lRUCache1.get(4));

console.log(lRUCache1.get(3));
// console.log(lRUCache1.list.head);
console.log(lRUCache1.get(2));
console.log(lRUCache1.get(1));
console.log(lRUCache1.put(5, 5));
console.log(lRUCache1.get(1));
console.log(lRUCache1.get(2));
console.log(lRUCache1.get(3));
console.log(lRUCache1.get(4));
console.log(lRUCache1.get(5));

// lRUCache = new LRUCache(2);
// console.log(lRUCache);
// console.log(lRUCache.put(1, 1)); // cache is {1=1}
// console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2)); // returns -1 (not found)
// console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1)); // return -1 (not found)
// console.log(lRUCache.get(3)); // return 3
// console.log(lRUCache.get(4)); // return 4

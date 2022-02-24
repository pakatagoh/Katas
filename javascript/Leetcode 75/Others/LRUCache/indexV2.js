/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.cacheMap = {};
  this.head = null;
  this.tail = null;
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

  const { prev, next } = foundNode;

  // remove from list
  if (prev === null && next === null) {
    // only node in the list
    this.head = null;
    this.tail = null;
  } else if (prev === null) {
    // node is at the head
    this.head = this.head.next;
    this.head.prev = null;
  } else if (next === null) {
    // node is at the tail
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    // node is somewhere between
    prev.next = next;
    next.prev = prev;
  }

  // add to back of list and receive new node
  const newNode = { key, value: valueToReturn, prev: null, next: null };

  // add new reference
  this.cacheMap[key] = newNode;
  if (this.head === null && this.tail === null) {
    // list is empty
    this.head = this.cacheMap[key];
    this.tail = this.cacheMap[key];
  }

  // list is not empty
  this.tail.next = this.cacheMap[key];
  this.cacheMap[key].prev = this.tail;
  this.tail = this.cacheMap[key];

  console.log(valueToReturn);

  return valueToReturn;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const newNode = { key, value, prev: null, next: null };

  if (this.cacheMap[key] !== undefined) {
    // remove key from list
    this.length--;
    const { prev, next } = this.cacheMap[key];
    if (prev === null && next === null) {
      // only node in the list
      this.head = null;
      this.tail = null;
    } else if (prev === null) {
      // node is at the head
      this.head = this.head.next;
      this.head.prev = null;
    } else if (next === null) {
      // node is at the tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // node is somewhere between
      prev.next = next;
      next.prev = prev;
    }
  }

  this.length++;

  this.cacheMap[key] = newNode;
  // add to back of list
  if (this.head === null && this.tail === null) {
    // list is empty then set head and tail to the same new node
    this.head = this.cacheMap[key];
    this.tail = this.cacheMap[key];
  } else {
    // list is NOT empty then set tail to the new node
    this.cacheMap[key].prev = this.tail;
    this.tail.next = this.cacheMap[key];
    this.tail = this.cacheMap[key];
  }

  if (this.length > this.capacity) {
    const keyToDelete = this.head.key;
    this.head = this.head.next;
    this.head.prev = null;
    delete this.cacheMap[keyToDelete];
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
// console.log(lRUCache1.head);
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

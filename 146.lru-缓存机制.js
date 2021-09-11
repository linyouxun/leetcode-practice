/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function NodeList(val, key) {
  this.val = val;
  this.key = key;
  this.prev = null;
  this.next = null;
}
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = {};
  this.head = new NodeList(0, "head");
  this.tail = new NodeList(0, "tail");

  this.head.next = this.tail;
  this.tail.next = this.head;

  this.head.prev = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var node = this.map[key];
  if (node) {
    this.put(key, node.val);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  var node = this.map[key];
  if (node) {
    this.removeNode(node);
  }
  if (this.size === this.capacity) {
    this.removeNode(this.tail.prev);
  }
  this.addNode(key, value);
};

LRUCache.prototype.removeNode = function (node) {
  var prev = node.prev;
  var next = node.next;
  prev.next = next;
  next.prev = prev;
  this.size--;
  delete this.map[node.key];
};

LRUCache.prototype.addNode = function (key, value) {
  var firstNode = this.head.next;
  var node = new NodeList(value, key);
  node.next = firstNode;
  firstNode.prev = node;
  this.head.next = node;
  node.prev = this.head;
  this.size++;
  this.map[node.key] = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

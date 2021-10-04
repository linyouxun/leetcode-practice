/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  var map = {};
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    map[word] = map[word] || 0;
    map[word]++;
  }
  var list = Object.keys(map).map((key) => {
    const num = map[key];
    return { num, key };
  });
  list.sort((o, o2) => {
    if (o.num > o2.num) {
      return -1;
    }
    if (o.num < o2.num) {
      return 1;
    }
    return o.key > o2.key ? 1 : -1;
  });
  return list.slice(0, k).map((ele) => ele.key);
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// var findMinHeightTrees = function (n, edges) {
//   if (n === 1) return [0];
//   var map = {};
//   for (var [edge, edge2] of edges) {
//     if (map[edge]) {
//       map[edge][edge2] = true;
//     } else {
//       map[edge] = { [edge2]: true };
//     }
//     if (map[edge2]) {
//       map[edge2][edge] = true;
//     } else {
//       map[edge2] = { [edge]: true };
//     }
//   }
//   var minHeight = n;
//   var res = [];
//   for (var i = 0; i < n; i++) {
//     var height = getHeight([i], map, {});
//     if (minHeight > height) {
//       minHeight = height;
//       res = [i];
//     } else if (minHeight === height) {
//       res.push(i);
//     }
//   }
//   return res;
// };
// function getHeight(nodes, map, used) {
//   var unUse = [];
//   for (var i = 0; i < nodes.length; i++) {
//     used[nodes[i]] = true;
//     unUse = [...unUse, ...Object.keys(map[nodes[i]])];
//   }
//   unUse = unUse.filter((node) => !used[node]);
//   if (unUse.length + 0) {
//     return 1 + getHeight(unUse, map, used);
//   }
//   return 1;
// }
function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];
  var map = {};
  for (var edge of edges) {
    map[edge[0]] = map[edge[0]] || new Set();
    map[edge[1]] = map[edge[1]] || new Set();

    map[edge[0]].add(edge[1]);
    map[edge[1]].add(edge[0]);
  }
  var leaves = [];
  Object.keys(map).forEach((key) => {
    const l = map[key];
    if (l.size === 1) {
      leaves.push(+key);
    }
  });
  while (Object.keys(map).length > 2) {
    var v = [];
    for (var i = 0; i < leaves.length; i++) {
      var key = leaves[i];
      Array.from(map[key]).forEach((key2) => {
        map[key2].delete(key);
        if (map[key2].size === 1) {
          v.push(key2);
        }
      });
      delete map[key];
    }
    leaves = v;
  }

  return Object.keys(map).map(Number);
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let ll = 0,
    rr = 0;

  for (let i = 0; i < s.length; i++)
    for (let j of [i, i + 1])
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];

  return s.substring(ll, rr + 1);
}
// var longestPalindrome = function (s) {
//   if (s.length < 2) {
//     return s;
//   }
//   var map = { [s[0]]: 0 };
//   var str = s[0];
//   for (var i = 1; i < s.length; i++) {
//     var index = map[s[i]];
//     if (index !== undefined) {
//       var len = i - map[s[i]] + 1;
//       if (len > str.length && isPalindrome(s.substr(map[s[i]], len))) {
//         str = s.substr(map[s[i]], len);
//       }
//     }
//     map[s[i]] = i;
//   }
//   return str;
// };
// var isPalindrome = function (s) {
//   var len = s.length;
//   if (len === 0) return true;
//   var right = (len / 2) | 0;
//   var left = len - right - 1;
//   while (left >= 0) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left--;
//     right++;
//   }
//   return true;
// };
// @lc code=end

/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  var startDay = new Date("1971-01-01");
  var weeks = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];
  var endDay = new Date(
    `${year}-${month.toString().padStart(2, 0)}-${day
      .toString()
      .padStart(2, 0)}`
  );
  var dayCount = (endDay - startDay) / (1000 * 60 * 60 * 24);
  return weeks[dayCount % 7];
};
// @lc code=end

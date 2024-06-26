/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let currentValue = 0, maxValue = 0;
  for (let i = 0; i < gain.length; i++) {
    currentValue = currentValue + gain[i]
    if (currentValue > maxValue) maxValue = currentValue;
  }
  return maxValue
};
// Input: gain = [-5, 1, 5, 0, -7]  Output: 1
var gain = [-5, 1, 5, 0, -7]
largestAltitude(gain)


// 使用陣列方法解題
// var largestAltitude = function (gain) {
//   let newArray = [0];
//   for (let i = 0; i < gain.length; i++) {
//     newArray[i + 1] = newArray[i] + gain[i];
//   }
//   return newArray.sort((a, b) => a - b).pop()
// };
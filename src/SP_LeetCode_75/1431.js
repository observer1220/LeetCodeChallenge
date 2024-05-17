/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let GreatestNum = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= GreatestNum) {
      candies[i] = true
    } else {
      candies[i] = false
    }
  }
  console.log(candies);
  return candies
};
var candies = [2, 3, 5, 1, 3], extraCandies = 3
kidsWithCandies(candies, extraCandies)
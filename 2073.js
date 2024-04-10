/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  var timeTaken = 0;
  var bigestNum = Math.max(...tickets); // 找到tickets陣列中的最大值

  for (i = 0; i < bigestNum; i++) {
    for (j = 0; j < tickets.length; j++) {
      // 當tickets[j]歸零時，該數不再跑迴圈
      if (tickets[j] !== 0) {
        // 當tickets[k]歸零時，該數不再跑迴圈
        if (tickets[k] !== 0) {
          // 每次跑迴圈時，將陣列裡每個人的票數-1
          tickets[j] = tickets[j] - 1;
          // 每次跑迴圈時，計數器+1
          timeTaken++
        }
      }
    }
  }

  return timeTaken
};
// tickets = [2, 3, 2], k = 2
// tickets = [5, 1 ,1 ,1 ], k = 0
var tickets = [5, 1, 1, 1]
var k = 0
timeRequiredToBuy(tickets, k)
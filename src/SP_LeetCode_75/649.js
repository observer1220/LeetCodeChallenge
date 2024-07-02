/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const Rqueue = [], Dqueue = [], sLength = senate.length;
  for (let i = 0; i < sLength; i++) {
    if (senate[i] === 'R') {
      Rqueue.push(i);
    } else {
      Dqueue.push(i);
    }
  }
  console.log(Rqueue, Dqueue);

  while (Rqueue.length > 0 && Dqueue.length > 0) {
    // 下一輪行動雙方參議員的位置，即兩個陣列裡的第一順位
    const rIdx = Rqueue.shift();
    const dIdx = Dqueue.shift();

    // 比較雙方陣營參議員的索引號碼
    // 索引較小者可以禁止索引較大者的投票權
    // 被禁言者需往後推遲一輪，因此push時要加上參議院總人數的長度
    if (rIdx > dIdx) {
      Dqueue.push(dIdx + sLength)
    } else {
      Rqueue.push(rIdx + sLength)
    }
    console.log(Rqueue, Dqueue);
  }
  return Rqueue.length > 0 ? 'Radiant' : 'Dire';
};
// "RD"  => "Radiant"
// "RDD" => "Dire"
// "RRR" => "Radiant"
// "DR"  => "Dire"
// "DDR" => "Dire"
// "DDRRR" => "Dire"
var senate = "DDRRR"
predictPartyVictory(senate)

// 自解失敗
// let stack = senate.split('');
// let left = 0, right = 1;
// while (left < stack.length) {
//   if (stack[left] === 'R' && stack[right] === 'D' || stack[left] === 'D' && stack[right] === 'R') {
//     stack.splice(right, 1);
//   } else if (stack[left] === 'R' && stack[right] === 'R' || stack[left] === 'D' && stack[right] === 'D') {
//     right++
//   }
//   left++
// }
// return stack[stack.length - 1].toString() === 'R' ? 'Radiant' : 'Dire'
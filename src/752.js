/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 創建一個 Set 來存儲所有的deadends
  const dead = new Set(deadends);
  // 初始化一個隊列，隊列中的元素是一個二維數組，包含當前的鎖的狀態和轉動次數
  const queue = [['0000', 0]];
  // 創建一個 Set 來存儲已經處理過的狀態，以避免重複處理
  const seen = new Set(['0000']);

  // 定義一個函數，用於獲取給定鎖的下一個可能的狀態
  const getNextStates = (s = '0000') => {
    const ans = [];

    // 對於每個鎖的位置，生成兩個可能的新狀態：向上轉動一位和向下轉動一位
    for (let i = 0; i < s.length; i++) {
      // 獲取當前位置的數字，+s[i] 是將字符串轉換為數字，也可以使用 Number(s[i]) 來實現
      const currentDigit = Number(s[i]);

      // 向上轉動一位，注意這裡是 (currentDigit + 1) % 10，因為鎖的每個位置都是循環的
      const upState = s.slice(0, i) + ((currentDigit + 1) % 10).toString() + s.slice(i + 1);
      ans.push(upState);

      // 向下轉動一位，注意這裡是 (currentDigit + 9) % 10，因為鎖的每個位置都是循環的
      const downState = s.slice(0, i) + ((currentDigit + 9) % 10).toString() + s.slice(i + 1);
      ans.push(downState);
    }
    console.log('ans', ans);
    return ans;
  }

  // 遍歷隊列中的所有狀態，直到找到目標狀態或者遍歷完所有可能的狀態
  for (let [curr, turns] of queue) {
    if (curr === target) return turns; // 如果當前狀態等於目標狀態，返回轉動次數
    if (dead.has(curr)) continue; // 如果當前狀態是死點，跳過該狀態，繼續下一個
    for (let next of getNextStates(curr)) {
      if (seen.has(next)) continue; // 如果已經處理過該狀態，跳過該狀態，繼續下一個
      seen.add(next); // 將新狀態添加到已處理的狀態集合中
      queue.push([next, turns + 1]) // 將新狀態和轉動次數添加到隊列中
    }
  }

  return -1 // 如果無法找到目標狀態，返回 -1
};
// deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202", Output: 6
// - 正確："0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"
// - 錯誤："0000" -> "0001" -> "0002" -> "0102" -> "0202"，因為0102是deadend
// deadends = ["8888"], target = "0009", Output: 1
// deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target = "8888", Output: -1
var deadends = ["0201", "0101", "0102", "1212", "2002"];
var target = "0202";
openLock(deadends, target)

/**
 * 1. 預設值為"0000"
 * 2. 每次轉到一個齒輪
 * 3. 兩種轉動方式，一種從千位數開始，一種從個位數開始，決定從哪裡轉動的關鍵在於deadends list
 * 4. 把從千位數轉動的步驟記錄在一個陣列，從個位數轉動的步驟紀錄在另一個陣列，最後比較兩者的長度，較短者獲勝
 */
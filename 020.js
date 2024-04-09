/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];

  // 定義對應關係
  var newMap = new Map()
  newMap.set('(', ')');
  newMap.set('[', ']');
  newMap.set('{', '}');

  for (i = 0; i < s.length; i++) {
    var currentChar = s[i]

    // 如果是開括號
    // 將s字串裡的開括號，放入堆疊中
    if (newMap.has(currentChar)) {
      stack.push(currentChar);
    } else {
      // 如果是關閉括號
      // 取得堆棧中的最後一個值(開括號)
      var lastItem = stack.pop()

      // newMap的key為開括號，但value為關閉括號
      // newMap.get(lastItem)是取得newMap的值，即關閉括號
      // 這裡的currentChar只會取得關閉括號
      // 當newMap.get(lastItem)與currentChar不匹配時返回false
      // 當沒有lastItem，即代表stack為空陣列返回false
      if (newMap.get(lastItem) !== currentChar || !lastItem) {
        return false
      }
    }
  }

  // 當堆疊陣列為空時，代表所有的開括號都有匹配的關閉括號
  return stack.length === 0
};

// "()"     = true
// "()[]{}" = true
// "(]"     = false
var s = "()[]{}"
isValid(s)
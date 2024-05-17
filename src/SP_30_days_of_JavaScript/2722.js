/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // 創建一個空物件 result，用於存放最終結果
  const result = {};

  // 將 arr1 中的元素以其 id 屬性作為 key，放入 result 物件中
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  // 遍歷 arr2 陣列中的元素
  for (let i = 0; i < arr2.length; i++) {
    // 如果 result 物件中已經存在具有相同 id 的元素
    if (result[arr2[i].id]) {
      // 將 arr2[i] 中的屬性複製到 result[arr2[i].id] 對應的元素中
      for (const key in arr2[i])
        result[arr2[i].id][key] = arr2[i][key]
    } else {
      // 如果 result 物件中不存在具有相同 id 的元素，直接將 arr2[i] 放入 result 中，以其 id 為 key
      result[arr2[i].id] = arr2[i];
    }
  }

  // 將 result 物件中的值以陣列形式返回
  return Object.values(result);
};
var arr1 = [
  { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
], arr2 = [
  { "id": 1, "b": { "c": 84 }, "v": [1, 3] }]
join(arr1, arr2)

// [
//   { "id": 1, "x": 2, "y": 3 },
//   { "id": 2, "x": 10, "y": 20 },
//   { "id": 3, "x": 0, "y": 0 }
// ]
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 初始化變數：ans 用來儲存目前找到的最大面積
  // left 和 right 是指向容器的兩端的指標，分別從左邊和右邊開始
  let ans = 0, left = 0, right = height.length - 1;

  // 當 left 指標小於 right 指標時，進行迴圈：
  while (left < right) {
    // 計算當前容器的面積：
    // 取 height[left] 和 height[right] 中較小的值，乘以兩個指標之間的距離 (right - left)
    // 並更新最大面積 ans
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));

    // 移動指標以嘗試找到更大的面積：
    // 當 left 指標的高度小於等於 right 指標的高度，則左指標右移（left++），否則，右指標左移（right--）
    height[left] <= height[right] ? left++ : right--;
  }

  console.log(ans);
  // 返回找到的最大面積
  return ans
};
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7] Output: 49
// Input: height = [1, 1] Output: 1
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height)
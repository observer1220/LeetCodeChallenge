/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // 建立一個堆疊來追蹤小行星的狀態
  let stack = [];

  // 遍歷所有小行星
  for (let asteroid of asteroids) {
    // 標記當前小行星是否被摧毀
    let isDestroyed = false;

    // 當堆疊中有元素且當前小行星是向左移動的（負數），而堆疊頂部小行星是向右移動的（正數）
    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      // 小行星陣列的最後一個值
      let topAsteroid = stack[stack.length - 1];

      // 比較「小行星陣列的最後一個值」與「當前小行星」的大小，-asteroid是為了將負數轉為正數(絕對值)
      if (topAsteroid < -asteroid) {
        // 若「小行星陣列的最後一個值」較小，則彈出小行星陣列，並繼續檢查下一個小行星陣列的值
        stack.pop();
        continue;
      } else if (topAsteroid === -asteroid) {
        // 若「小行星陣列的最後一個值」與當前小行星大小相等，則彈出堆疊頂部的小行星，並標記當前小行星被摧毀
        stack.pop();
      }

      // 當前小行星被摧毀退出循環
      isDestroyed = true;
      break;
    }

    // 若當前小行星沒有被摧毀，則將其推入堆疊
    if (!isDestroyed) {
      stack.push(asteroid);
    }
  }

  // 返回最終狀態的小行星
  return stack;
};
var asteroids = [8, -8]
asteroidCollision(asteroids)
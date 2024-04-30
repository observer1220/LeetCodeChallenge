// 定義一個時間限制快取類別
var TimeLimitedCache = function () {
  // 使用 Map 來存儲快取的鍵值對
  this.cache = new Map()
};

// 定義 set 方法，用於設置快取內容
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // 檢查是否已存在指定的鍵
  let found = this.cache.has(key);
  // 如果存在，則清除該鍵的計時器，以便重新設置
  if (found) clearTimeout(this.cache.get(key).ref);
  // 設置鍵值對到快取中，包括值和設置的時間限制，使用 setTimeout 在指定的時間後刪除該鍵
  this.cache.set(key, { value, ref: setTimeout(() => this.cache.delete(key), duration) });
  // 回傳是否已存在該鍵
  return found
};

// 定義 get 方法，用於獲取指定鍵的值
TimeLimitedCache.prototype.get = function (key) {
  // 如果快取中存在指定鍵，則返回對應的值；否則返回 -1
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

// 定義 count 方法，用於獲取快取中鍵值對的數量
TimeLimitedCache.prototype.count = function () {
  // 返回快取的大小，即鍵值對的數量
  return this.cache.size;
};

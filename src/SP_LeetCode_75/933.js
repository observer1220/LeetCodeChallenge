// 類的定義和初始化
class RecentCounter {
  constructor () {
    // 儲存請求(request)的時間戳
    this.stream = [];
  }
  // ping方法
  ping (t) {
    // 添加請求時間戳
    this.stream.push(t);

    // 移除過期的請求
    while (this.stream[0] < t - 3000) {
      this.stream.shift();
    }

    console.log(this.stream, this.stream.length);
    // 返回請求數量
    return this.stream.length;
  }
}
var obj = new RecentCounter();
obj.ping(1)
obj.ping(100)
obj.ping(3001)
obj.ping(3002)
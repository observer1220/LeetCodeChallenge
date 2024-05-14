class EventEmitter {
  constructor () {
    // 創建一個 Map 來存儲事件名稱和相應的監聽器（callbacks）
    this.events = new Map();
  }

  // 訂閱事件
  subscribe (eventName, callback) {
    // 如果事件名稱不存在，則創建一個空的監聽器陣列
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    // 獲取事件對應的監聽器陣列，將新的監聽器加入其中
    const listeners = this.events.get(eventName);
    listeners.push(callback);

    // 返回一個包含取消訂閱函數的物件
    return {
      unsubscribe: () => {
        // 在取消訂閱函數中找到並移除該監聽器
        const index = listeners.indexOf(callback);
        if (index !== -1) listeners.splice(index, 1);
      }
    };
  }

  // 觸發事件
  emit (eventName, args = []) {
    // 如果事件名稱不存在，返回空陣列
    if (!this.events.has(eventName)) {
      return []
    }

    // 獲取事件對應的監聽器陣列，並依次執行每個監聽器，將結果存入結果陣列
    const listeners = this.events.get(eventName);
    const results = [];
    for (const listener of listeners) {
      results.push(listener(...args));
    }
    return results; // 返回所有監聽器的執行結果
  }
}

SELECT
  -- ROUND 函數用於將計算結果四捨五入到小數點後兩位，並將其命名為 immediate_percentage
  ROUND(
    -- 將 CASE 表達式的結果進行求和，計算出在偏好交付日期交付的訂單數
    -- 使用 CASE 表達式，當 order_date 等於 customer_pref_delivery_date 時返回 1，否則返回 0
    -- COUNT(*) 計算總的訂單數量
    -- 在偏好交付日期交付的訂單數量除以總訂單數量，再乘以 100.00，得到百分比
    SUM(
      CASE
        WHEN order_date = customer_pref_delivery_date THEN 1
        ELSE 0
      END
    ) * 100.00 / COUNT(*),
    2
  ) AS immediate_percentage
FROM
  Delivery
WHERE
  -- 指定篩選條件，只包括那些在子查詢中出現的 (customer_id, order_date)
  -- 子查詢用於找到每個 customer_id 的最早 order_date
  -- MIN(order_date) 找到每個客戶的最早訂單日期
  -- 按照 customer_id 分組，以確保每個客戶只返回一行最早的訂單日期
  (customer_id, order_date) IN (
    SELECT
      customer_id,
      MIN(order_date)
    FROM
      Delivery
    GROUP BY
      customer_id
  );

-- Input: Delivery table:
-- +-------------+-------------+------------+-----------------------------+
-- | delivery_id | customer_id | order_date | customer_pref_delivery_date |
-- +-------------+-------------+------------+-----------------------------+
-- | 1           | 1           | 2019-08-01 | 2019-08-02                  |
-- | 2           | 2           | 2019-08-02 | 2019-08-02                  |
-- | 3           | 1           | 2019-08-11 | 2019-08-12                  |
-- | 4           | 3           | 2019-08-24 | 2019-08-24                  |
-- | 5           | 3           | 2019-08-21 | 2019-08-22                  |
-- | 6           | 2           | 2019-08-11 | 2019-08-13                  |
-- | 7           | 4           | 2019-08-09 | 2019-08-09                  |
-- +-------------+-------------+------------+-----------------------------+
-- Output: 
-- +----------------------+
-- | immediate_percentage |
-- +----------------------+
-- | 50.00                |
-- +----------------------+
-- Explanation: 
-- The customer id 1 has a first order with delivery id 1 and it is scheduled.
-- The customer id 2 has a first order with delivery id 2 and it is immediate.
-- The customer id 3 has a first order with delivery id 5 and it is scheduled.
-- The customer id 4 has a first order with delivery id 7 and it is immediate.
-- Hence, half the customers have immediate first orders.
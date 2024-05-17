SELECT
  -- 使用 to_char 函數將 trans_date 列中的日期格式化為 'YYYY-MM' 形式，並將其命名為 month
  to_char (trans_date, 'YYYY-MM') AS month,
  country,
  -- 計算每個組別中 id 的總數，即每個月每個國家的總交易數，並將其命名為 trans_count
  COUNT(id) AS trans_count,
  -- 使用 CASE 表達式計算 state 為 'approved' 的交易數，並將其命名為 approved_count
  SUM(
    CASE
      WHEN state = 'approved' THEN 1
      ELSE 0
    END
  ) AS approved_count,
  -- 計算每個組別中所有交易的 amount 總和，並將其命名為 trans_total_amount
  SUM(amount) AS trans_total_amount,
  -- 使用 CASE 表達式計算 state 為 'approved' 的交易金額總和，並將其命名為 approved_total_amount
  SUM(
    CASE
      WHEN state = 'approved' THEN amount
      ELSE 0
    END
  ) AS approved_total_amount
FROM
  Transactions
GROUP BY
  -- 1 = to_char (trans_date, 'YYYY-MM'), 2 = country
  1,
  2;

-- Input: Transactions table:
-- +------+---------+----------+--------+------------+
-- | id   | country | state    | amount | trans_date |
-- +------+---------+----------+--------+------------+
-- | 121  | US      | approved | 1000   | 2018-12-18 |
-- | 122  | US      | declined | 2000   | 2018-12-19 |
-- | 123  | US      | approved | 2000   | 2019-01-01 |
-- | 124  | DE      | approved | 2000   | 2019-01-07 |
-- +------+---------+----------+--------+------------+
-- Output: 
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
-- | month    | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
-- | 2018-12  | US      | 2           | 1              | 3000               | 1000                  |
-- | 2019-01  | US      | 1           | 1              | 2000               | 2000                  |
-- | 2019-01  | DE      | 1           | 1              | 2000               | 2000                  |
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
SELECT
  s.user_id,
  ROUND(
    AVG(
      CASE
        WHEN action = 'confirmed' THEN 1
        ELSE 0
      END
    ),
    2
  ) AS confirmation_rate
FROM
  Signups AS s
  LEFT JOIN Confirmations AS c ON s.user_id = c.user_id
GROUP BY
  s.user_id;

-- | user_id | action    |
-- | ------- | --------- |
-- | 2       | confirmed |
-- | 2       | timeout   |
-- | 3       | timeout   |
-- | 3       | timeout   |
-- | 6       | null      |
-- | 7       | confirmed |
-- | 7       | confirmed |
-- | 7       | confirmed |
---
-- | user_id | confirmation_rate |
-- | ------- | ----------------- |
-- | 6       | 0                 | 0
-- | 3       | 0                 | 0 / 2
-- | 7       | 1                 | 3 / 3
-- | 2       | 0.5               | 1 / 2
---
-- ROUND()函數將結果四捨五入到兩位小數
-- AVG()函數計算括號內條件的平均值，在此它計算了confirmed 的平均值
-- CASE WHEN action = 'confirmed' THEN 1 ELSE 0 END
-- 條件語句用於檢查每個行動是否為confirmed，如果是confirmed則返回1，否則返回0
-- ROUND(平均值, 小數點位數)
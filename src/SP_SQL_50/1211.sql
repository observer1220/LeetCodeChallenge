SELECT
  query_name,
  -- 平均(rating / position)並取至小數點後2位
  ROUND(AVG(rating / position::DECIMAL), 2) AS quality,
  -- 加總(rating < 3)的資料，使用(* 100.0)確保除法結果，得到浮點數而非整數
  -- COUNT(*) 會包含表格中的所有行，包括 NULL 值的行
  ROUND(SUM((rating < 3)::INT) * 100.0 / COUNT(*), 2) AS poor_query_percentage
FROM
  Queries
WHERE
-- 過濾 query_name 欄位為空的行
  query_name IS NOT NULL
GROUP BY
  query_name;

-----
-- Explanation: 
-- Dog queries quality is ((5 / 1) + (5 / 2) + (1 / 200)) / 3 = 2.50
-- Dog queries poor_ query_percentage is (1 / 3) * 100 = 33.33
--
-- Cat queries quality equals ((2 / 5) + (3 / 3) + (4 / 7)) / 3 = 0.66
-- Cat queries poor_ query_percentage is (1 / 3) * 100 = 33.33
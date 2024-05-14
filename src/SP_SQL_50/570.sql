-- 用於找出管理至少5名員工的經理
SELECT
  e1.name
FROM
  Employee AS e1
  INNER JOIN Employee AS e2 ON e1.id = e2.managerId
GROUP BY
  e1.name,
  e2.managerId
HAVING
  COUNT(e2.managerId) >= 5;

-- 它使用了自身資料表Employee兩次，並進行了內部連接（INNER JOIN）
-- 它將Employee資料表自身連接，以匹配每個員工的ID與其經理的ID（e1.id = e2.managerId）
-- 然後，它根據員工的名字（e1.name）和其經理的ID（e2.managerId）進行分組（GROUP BY）
-- 使用HAVING子句，篩選出具有至少5個下屬（由e2.managerId計數）的經理
-- 最後，查詢返回符合條件的經理的名字（e1.name）
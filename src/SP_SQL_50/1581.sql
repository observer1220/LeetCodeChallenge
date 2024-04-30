--Write your PostgreSQL query statement below
SELECT v.customer_id, COUNT(v.visit_id) as count_no_trans
-- 從Visits表格中選擇資料，並為每個訪問計算一個ID
FROM Visits AS v
-- 使用LEFT JOIN將Visits表格和Transactions表格進行連接
LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id
-- 篩選出Transactions表格中沒有對應訪問ID的資料（即未發生交易的訪問）
WHERE t.visit_id IS NULL 
-- 根據客戶ID進行分組
GROUP BY v.customer_id;
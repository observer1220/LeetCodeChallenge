SELECT name FROM customer WHERE coalesce(referee_id, 0) <> '2'

-- 這段 SQL 查詢語句中的 COALESCE(referee_id, 0) 用於處理可能的空值。
-- 如果 referee_id 是空值（NULL），則 COALESCE 函數會返回第二個參數，
-- 即 0。這樣可以確保即使 referee_id 是 NULL，也不會影響到比較的結果。

-- 而 <> 符號表示不等於。
-- 所以 WHERE COALESCE(referee_id, 0) <> 2 的意思是
-- 選擇那些 referee_id 不等於 2 或者是空值的客戶。
-- <> 也可用 != 替代

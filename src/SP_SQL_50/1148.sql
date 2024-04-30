-- Write your PostgreSQL query statement below
SELECT distinct author_id AS id FROM views
WHERE author_id = viewer_id
ORDER BY id ASC

-- 這段SQL語法是用來選擇從一個叫做 "views" 的資料表中選取不重複的作者 ID（author_id），
-- 並且這些作者 ID 必須等於觀看者的 ID（viewer_id）。
-- 然後，以遞增的方式（ASC）來排序這些作者 ID。
-- 簡單來說，這段SQL語法是為了找出所有作者和觀看者相同的觀看紀錄，並列出不重複的作者 ID。
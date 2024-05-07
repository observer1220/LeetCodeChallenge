-- Write your PostgreSQL query statement below
SELECT
  stu.student_id,
  stu.student_name,
  sub.subject_name,
  COUNT(e.subject_name) AS attended_exams
FROM
  Students AS stu
  CROSS JOIN Subjects AS sub
  LEFT JOIN Examinations AS e ON stu.student_id = e.student_id
  AND sub.subject_name = e.subject_name
GROUP BY
  stu.student_id,
  stu.student_name,
  sub.subject_name
ORDER BY
  stu.student_id ASC;

-- CROSS JOIN 是展示所有可能的組合
-- LEFT JOIN  則是保留左側表格的所有資料，並添加與右側表格匹配的資料。
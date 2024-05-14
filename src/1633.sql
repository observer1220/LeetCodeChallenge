SELECT
  r.contest_id,
  ROUND(COUNT(r.user_id) * 100.0 / u.total_users, 2) AS percentage
FROM
  Register r
  LEFT JOIN (
    SELECT
      COUNT(user_id) AS total_users
    FROM
      Users
  ) u ON true
GROUP BY
  r.contest_id,
  u.total_users
ORDER BY
  percentage DESC,
  r.contest_id ASC;

-- 在LEFT JOIN中使用子查詢
-- percentage(由高到低), contest_id(由低到高)
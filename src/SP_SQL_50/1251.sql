SELECT
  p.product_id,
  COALESCE(
    ROUND(
      SUM(p.price * u.units)::numeric / SUM(u.units),
      2
    ),
    0
  ) AS average_price
FROM
  Prices AS p
  LEFT JOIN UnitsSold AS u ON p.product_id = u.product_id
  AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY
  p.product_id;

-- COALESCE()：可用來處理可能的NULL值，將其替換為0
-- 在LEFT JOIN時，需比對u.purchase_date與p.p.start_date AND p.end_date得知p.price